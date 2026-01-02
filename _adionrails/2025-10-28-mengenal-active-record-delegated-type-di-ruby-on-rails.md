---
layout: default
image: /assets/images/adionrails/delegated-type.webp
show_image: true
title: Mengenal Active Record Delegated Type di Ruby on Rails
---

Bayangkan, kamu punya sebuah blog buatan kamu sendiri. Ada beberapa jenis post yang bisa dibuat, yaitu Text, Video, dan Galeri.

Di halaman admin post, kamu harus bisa mengatur semua jenis post tersebut dalam satu halaman. Jika ingin menampilkan jenis post tertentu, kamu perlu menggunakan fitur filter.

Pertanyaannya, bagaimana kamu akan menentukan struktur tabel untuk mendukung kebutuhan ini?

Di Ruby on Rails, ada dua cara yang bisa digunakan untuk mendukung kebutuhan ini.

Cara pertama adalah menggunakan Single Tabel Inheritance (STI). STI ini sederhananya adalah implementasi object-oriented programming (OOP) di real production app. Kalau temen-temen semua pernah belajar OOP, temen-temen pasti udah nggak asing dengan contoh seperti ini:

```ruby
class Post {}

class TextPost extends Post {}

class GalleryPost extends Post {}

class VideoPost extends Post {}
```

Kalau diubah ke dalam bentuk STI, maka `TextPost`, `GalleryPost` dan `VideoPost` disimpan di kolom type pada tabel `posts`.

Tapi, kalau kita pakai pendekatan ini, implementasinya akan cukup tricky untuk kebutuhan di atas, karena ada beberapa perbedaan atribut antara post jenis teks, galeri, dan video.

* galeri perlu menyimpan nilai `image_url`, sedangkan post jenis text dan video tidak ada.
* video perlu menyimpan nilai `video_url` dan duration, sedangkan post jenis text dan galeri tidak perlu.
* text perlu menyimpan nilai `content`, sedangkan post jenis galeri atau video tidak perlu.

Kalau begitu, apakah ada pendekatan lain yang bisa kit a ambil?

## Active Record Delegated Type

Jawabannya, pakai Active Record Delegated Type.

Sederhananya begini:

* semua atribut yang ada di masing-masing jenis post, disimpan di satu tabel yang sama, yaitu tabel posts;
* setiap jenis post punya tabelnya masing-masing;
* atribut-atribut yang sifatnya unik, disimpan di masing-masing tabel;
* di tabel posts tambahkan kolom `postable_id` dan `postable_type` sebagai relasi polimorphic ke tabel `text_posts`, `gallery_posts`, dan `video_posts`.

Di Rails, kode modelnya kurang lebih sebagai berikut:

```ruby
class Post < ApplicationRecord
  delegated_type :postable, types: %w[ TextPost VideoPost GalleryPost ]
end

class TextPost < ApplicationRecord
  has_one :post, as: :postable, dependent: :destroy
end

class GalleryPost < ApplicationRecord
  has_one :post, as: :postable, dependent: :destroy
end

class VideoPost < ApplicationRecord
  has_one :post, as: :postable, dependent: :destroy
end
```

Dengan demikian, untuk membuat suatu jenis post baru, kita bisa melakukannya dengan cara berikut:

```ruby
# create new gallery post
gallery_post = Post.create(
  title: "This is gallery post",
  slug: "this-is-gallery-post",
  postable: GalleryPost.new(
    image_url: "https://fakeimg.pl/300x300",
  )
)

# create new video post
video_post = Post.create(
  title: "This is video post",
  slug: "this-is-video-post",
  postable: VideoPost.new(
    video_url: "https://www.youtube.com/watch?v=videoID",
    duration: 3600,
  )
)
```

Karena disimpan di satu tabel yang sama, sekarang kita sudah bisa melakukan pagination dengan cukup mudah, tanpa harus menggunakan query yang cukup kompleks.

Semoga bermanfaat!
