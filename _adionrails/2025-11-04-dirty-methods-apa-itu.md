---
layout: default
image: /assets/images/adionrails/dirty-methods.webp
show_image: true
title: Dirty Methods, Apa Itu?
---

Di tulisan saya sebelumnya, saya sudah memberikan sedikit gambaran tentang itu dirty methods. Di tulisan ini, saya akan bahas lebih dalam lagi:

* bagaimana implementasinya di Active Record
* bagaimana kita mengimplementasikan dirty methods di class lain selain Active Record

## Dirty Methods

Sederhananya, dirty methods adalah method-method yang dapat digunakan untuk melacak suatu perubahan pada suatu atribut:

* apakah suatu atribut mangalami perubahan nilai
* apa nilai atribut sebelum dan setelah perubahan
* atribut apa saja yang mengalami perubahan
* dan sebagainya

Method-method yang berkaitan dengan hal di atas disimpan di dalam sebuah module, yaitu `ActiveModel::Dirty`. Modul ini sudah otomatis di-include di setiap model yang ada, sehingga sudah bisa langsung kita gunakan.

Beberapa method yang bisa digunakan untuk melacak perubahan terhadap atribut adalah sebagai berikut:

* `attribute_change`
* `attribute_changed?`
* `attribute_previous_change`
* `attribute_previously_changed?`
* `attribute_previously_was`
* `attribute_was`
* `attribute_will_change!`

Prefix `attribute` ini nantinya akan kita replace dengan nama atribut sesungguhnya, misal `name`. Khusus di model, ada beberapa method tambahan yang akan mengecek perubahan di database:

* `attribute_before_last_save`
* `attribute_change_to_be_saved`
* `attribute_in_database`,
* `changed_attribute_names_to_save`
* `changes_to_save`
* `has_changes_to_save?`
* `reload`
* `saved_change_to_attribute`
* `saved_change_to_attribute?`
* `saved_changes`
* `saved_changes?`
* `will_save_change_to_attribute?`

Banyak ya? Tenang, kalian nggak harus hafal semua kok, hehe.

Kita langsung saja ke contohnya. Misal, kita punya sebuah model `User` dengan atribute `name`

```ruby
user = User.new
user.changed? # false
user.name = "Adi"
user.changed? # true
user.name_changed? # true
user.name_changed?(from: nil, to: "Adi") # true
user.name_was # nil
user.name_change # [ nil, "Adi" ]
user.name = "Purnama"
user.name_change # [ nil, "Purnama" ]
user.changed # [ "name" ]
user.changes # { "name" => [ nil, "Purnama" ] }
```

Saya rasa dari contoh di atas pun sudah cukup jelas setiap method peruntukannya untuk apa. Yang cukup menarik adalah method name_change. Setelah namanya diganti dari `Adi` jadi `Purnama`, method `name_change` mengembalikaan `[ nil, "Purnama" ]` ketimbang `[ "Adi", "Purnama" ]`. Indeks pertama akan menyimpan nilai atribut asli ketimbang nilai atribut terbaru. Ini yang perlu diingat.

Sekarang, kita coba simpan datanya.

```ruby
user.save
user.changed? # false
user.name_changed # false
```

Setelah disimpan, semua perubahan akan di-reset. Selama belum di-reload, kita masih bisa mengakses nilai-nilai sebelumnya menggunakan kata `previously`.

```ruby
user.name_previously_was # nil
user.name_previously_changed? # true
user.name_previously_changed?(from: nil, to: "Purnama") # true
user.name_previous_change # => [ nil, "Purnama" ]
user.name_previously_was # => nil
```

Kita akan kehilangan akses terhadap method-method `previously` ini kalau kita mereset-nya.

```ruby
user.reload!
user.previous_changes # {}
user.name_previously_changed? # false
```

Kita bisa membatalkan perubahan dengan me-rollbacknya. Ingat, rollback di sini bukan rollback database transaction ya!
```ruby
user.name = "Adi"
user.rollback!
user.name # Purnama
user.name_changed? # false
```

Meng-assign atribut dengan nilai yang sama tidak akan menandai atribut tersebut sebagai atribut yang berubah, kecuali kita sendiri yang memaksanya.

```ruby
user.name = "Purnama"
user.name_change # []
user.name_will_change!
user.name_change # [ "Purnama", "Purnama" ]
user.name = "Adi"
user.name_change # [ "Purnama", "Adi" ]
```

## Method Tambahan di Active Record

Berikut beberapa contoh penggunaan dirty method tambahan yang ditambahkan pada model-model di aplikasi Rails.

```ruby
user = User.find_by(name: "Purnama")
user.name = "Adi"
user.name_in_database # "Purnama"
user.will_save_change_to_name # true
user.name_change_to_be_saved # [ "Purnama", "Adi" ]
user.changes_to_save # { "name" => [ "Purnama", "Adi" ] }
```

Simpan perubahan, dan kita lihat hasilnya seperti apa.

```ruby
user.save
user.name_in_database # "Adi"
user.saved_change_to_name? # true
user.saved_change_to_name # [ "Purnama", "Adi" ]
user.name_before_last_save # "Purnama"

Tentu saja, me-reload instance akan me-reset saved change dan last save.

```ruby
user.reload
user.saved_change_to_name? # false
user.saved_change_to_name # nil
user.name_before_last_save # nil
```

## Implementasi Dirty Methods di PORO (Plain Old Ruby Object)

PORO sederhananya adalah sebuah class polos di bahasa pemrograman Ruby. Untuk mengimplementasi dirty method di suatu class, ada beberapa persyaratan yang harus dipenuhi:

* menambahkan include `ActiveModel::Dirty` pada class
* panggil `define_attribute_methods` dengan parameter nama atribut yang ingin kamu lacak perubahannya
* panggil `*_will_change!` sebelum setiap perubahan pada atribut yang dilacak
* panggil `changes_applied` setelah perubahannya di-apply.
* panggil `clear_changes_information` ketika kamu ingin me-reset informasi perubahan
* panggil `restore_attributes` ketika kamu ingin memulihkan data sebelumnya

Contoh implementasinya kurang lebih seperti ini:

```ruby
class Book
  include ActiveModel::Dirty

  define_attribute_methods :title

  def initialize
    @title = nil
  end

  def title
    @title
  end

  def title=(val)
    title_will_change! unless val == @title
    @title = val
  end

  def save
    # simpan ke data source (database, redis, file, dsb.)
    changes_applied
  end

  def reload!
    # ambil dari data source (database, redis, file, dsb.)

    clear_changes_information
  end

  def rollback!
    restore_attributes
  end
end
```

Itu saja untuk post kali ini. Semoga bermanfaat!


