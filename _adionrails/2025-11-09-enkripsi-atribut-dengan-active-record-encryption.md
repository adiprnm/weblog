---
layout: default
image: /assets/images/adionrails/active-record-encryption.webp
show_image: true
title: Enkripsi atribut dengan Active Record Encryption
---

Misal, di tabel `users` kita ingin mengenkripsi kolom nomor KTP, sehingga beberapa orang tertentu yang berhak mengaksesnya.

Di Ruby on Rails, hal ini bisa dilakukan secara praktis menggunakan Active Record Encryption.

## Implementasi

Untuk mengimplementasi Active Record Encryption, kita harus membuat primary key, deterministic key, dan key derivation salt-nya terlebih dahulu. Ini bisa dilakukan dengan perintah `rails db:encryption:init`.

Simpan hasilnya di file credentials per environment (test/development/production) menggunakan perintah `EDITOR=nvim rails credentials:edit --environment environment-name`. Kalau kamu lebih memilih pakai environment variable, kamu harus mengaturnya secara manual di `config/environments/environment-name.rb`.

```ruby
config.active_record.encryption.primary_key = ENV["ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY"]
config.active_record.encryption.deterministic_key = ENV["ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY"]
config.active_record.encryption.key_derivation_salt = ENV["ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT"]
```

Setiap environment harus punya key dan salt masing-masing. Sangat tidak disarankan untuk menggunakan key dan salt yang sama di semua environment untuk alasan keamanan.

Setelah selesai, kita sudah bisa meng-enkripsi kolom nomor KTP dengan sintaks seperti berikut:

```ruby
class User < ApplicationRecord
  encrypts :pii_number
end
```

Sekarang, mari kita buat user baru di rails console.

```ruby
example(dev):001> User.create(name: "Test", email_address: "test@example.com", pii_number: "123123123")
  TRANSACTION (0.1ms)  BEGIN immediate TRANSACTION /*application='Example'*/
  User Create (0.5ms)  INSERT INTO "users" ("name", "email_address", "pii_number", "created_at", "updated_at") VALUES ('Test', '[email protected]', '{"p":"X3c25RX0kgpN","h":{"iv":"7ZnPcg82oS7CfXOP","at":"nN7cJVPGFqXJOrVZQaztnA=="}}', '2025-11-08 23:48:35.465118', '2025-11-08 23:48:35.465118') RETURNING "id" /*application='Example'*/
  TRANSACTION (1.2ms)  COMMIT TRANSACTION /*application='Example'*/
```

Berdasarkan hasil di atas, kolom pii_number sudah otomatis ter-enkripsi. Sekarang kita coba pastikan data di database apakah sudah benar-benar terenkripsi.

```SQL
sqlite> SELECT pii_number FROM users;
{"p":"X3c25RX0kgpN","h":{"iv":"7ZnPcg82oS7CfXOP","at":"nN7cJVPGFqXJOrVZQaztnA=="}}
```

Ternyata sudah sesuai!

Mengaksesnya nomor KTP dari rails console atau dari aplikasi akan mendekripsi nomor KTP secara otomatis.

```ruby
example(dev):001> user = User.find_by(email_address: "test@example.com")
example(dev):002> user.pii_number
=> "123123123"
```

## Encrypt Action Text

Active Record encription ini juga bisa diimplementasi ke Action Text. Misal, user bisa mengatur bio. Untuk meng-enkripsi bio, kita bisa menambahkan opsi encrypted: true sebagai option has_rich_text

```ruby
class User < ApplicationRecord
  encrypts :pii_number
  has_rich_text :bio, encrypted: true
end
```

Itu saja, semoga bermanfaat!
