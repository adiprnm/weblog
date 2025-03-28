---
layout: default
title: Membangun platform blogging yang tanpa basa-basi dan dapat di-self-host
---

Beberapa waktu lalu, saya membangun sebuah platform blogging yang sederhana bernama Let's Blogging. Platform ini sangat terinspirasi dari Bearblog.

Semuanya berjalan baik, hanya saja, saya merasa terlalu overkill untuk membuat platform blogging sederhana menggunakan Rails.

Rails lebih dapat dirasakan manfaatnya ketika mengembangkan aplikasi yang cukup kompleks, dan platform blogging yang saya buat bukan salah satunya.

Jadi saya kepikiran: bagaimana kalau saya bangun ulang menggunakan Sinatra? Pada dasarnya, saya hanya perlu 4 tabel: `posts`, `pages`, `navlinks`, dan `settings`.

Saya bangun di sela-sela waktu senggang. Supaya lebih sederhana, saya pakai SQLite untuk menyimpan data, dan karena yang pakai cuma saya sendiri, HTTP Basic auth sangat cocok untuk autentikasi.

Bersama dengan tulisan ini, saya dengan senang hati mengumumkan bahwa versi 1 dari platform ini sudah bisa digunakan.

# 🎉🎉🎉🎉

Docker image-nya sudah saya publish ke [Docker Hub](https://hub.docker.com/r/adiprnm/simpleblog), dan source code nya sudah saya simpan di akun [GitHub](https://github.com/adiprnm/simpleblog) saya.

Masih ada beberapa hal yang perlu dikembangkan untuk beberapa waktu ke depan. Saya simpan di halaman [Roadmap](https://blog.adipurnm.my.id/roadmap).

Kalau tertarik, silahkan dicoba yah. Semoga bermanfaat 🫡
