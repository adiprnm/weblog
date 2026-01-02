---
layout: default
image: /assets/images/adionrails/active-record-store.webp
show_image: true
title: Mengenal Active Record Store di Ruby on Rails
---

Misal, kamu bikin sebuah aplikasi yang perlu menyimpan preferensi per user.

Ada dua pendekatan yang bisa kamu pakai.

Pendekatan pertama: buat tabel baru, misalkan `preferences`. Struktur tabelnya kurang lebih begjni:

* id
* user_id
* key
* value

Pendekatan ini sah-sah saja dilakukan, tapi untuk mendapatkan suatu preferensi, setidaknya kita akan melakukan 1 query ke tabel tersebut, entah itu untuk mengambil satu key-value saja, atau untuk mengambil semua key-value yang ada.

Pendekatan lainnya adalah dengan menyimpan nilai-nilai preferensi setiap user di sebuah kolom JSON dengan nama `preferences`, menggunakan struktur data hash (key-value).

## ActiveRecord::Store

Di Ruby on Rails, implementasi ini sudah sangat dimudahkan. Misal, setiap user bisa menentukan pakai bahasa apa, atau berada di time zone mana. Kita bisa mendefinisikannya sebagai berikut:

```ruby
class User < ApplicationRecord
  store :preferences, accessors: [ :language, :time_zone ], coder: JSON
end
```

Contoh implementasinya adalah sebagai berikut:

```ruby
user = User.new(language: "id", time_zone: "Asia/Jakarta")
user.language  # id
user.time_zone # Asia/Jakarta
```

Untuk mengambil semua attribute yang dimiliki oleh kolom preferences kita bisa panggil

```ruby
User.stored_attributes[:preferences] # [ :language, :time_zone ]
```

Kita juga bisa menambahkan prefix, suffix, dan melakukan override method accessors.

Mengatur prefix: true atau suffix: true akan menambahkan nama kolom sebelum atau setelah accessor. Misal:

```ruby
class User < ApplicationRecord
  store :preferences, accessors: [ :language ], coder: JSON, prefix: "user"
  store :preferences, accessors: [ :time_zone ], coder: JSON, suffix: true

  def user_language
    language = super
    case language
    when "id" then "Indonesia"
    when "en" then "English"
    else "Other language"
    end
  end
end

user = User.new(language: "id", time_zone: "Asia/Jakarta")
user.user_language         # "Indonesia"
user.time_zone_preferences # "Asia/Jakarta"
```

Yang menariknya adalah, Active Record ini sudah mendukung dirty method. Dirty method akan saya bahas selengkapnya di tulisan lain.

```ruby
user = User.new(language: "id", time_zone: "Asia/Jakarta")
user.user_language_changed? # false
user.user_language = "en"
user.user_language_changed? # true
user.user_language_was      # "id"
user.user_language_change   # [ "id", "en" ]
```

Semoga bermanfaat!

