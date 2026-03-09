---
layout: default
title: Install Umami SQLite di VPS menggunakan Dokku
tags: Tech
image: /assets/images/2026/2026-03-10_00-44.webp
show_image: true
---

Sebagai software analytic open source, Umami punya fitur analytic yang cukup lengkap, namun tidak terkesan bloated. Fitur inti yang diperlukan untuk web analytic sudah tersedia di Umami.

Umami itu hampir sempurna. Satu-satunya hal yang memberatkan saya adalah database-nya menggunakan PostgreSQL.

Ini berarti, kalau mau install Umami di VPS, harus nambah satu service PostgreSQL baru.

Bukan saya anti dengan PostgreSQL. Hanya saja:

1. VPS saya ini resource-nya sudah sangat pas-pasan. Nambah service PostgeSQL baru berarti nambah penggunaan resource server.
2. Menggunakan PostgreSQL untuk traffic kecil terlalu overkill. SQLite saja harusnya sudah cukup.

Oleh karena itu, saya mencari Umami dengan support database SQLite.

Indahnya open source itu, ada saja orang yang berkenan menambahkan support SQLite untuk Umami: [https://github.com/Maxime-J/umami-sqlite](https://github.com/Maxime-J/umami-sqlite). Sudah tersedia juga Docker image yang siap digunakan di server.

Dengan begini, saya pun bisa deploy Umami di server menggunakan Dokku.

## Bagaimana caranya?

1. Pastikan Dokku sudah terinstall di VPS kamu. Kalau belum, silahkan install dulu di VPS dengan mengikut [dokumentasi ini](https://dokku.com/docs/getting-started/installation){: class="underline--dotted" }.
2. Buat app baru pakai perintah `dokku apps:create umami`.
3. Buat persistent storage dan mount ke container Umami. Bisa pakai docker volume supaya lebih sederhana. Cara buatnya bisa pakai `docker volume create umami`.
4. Mount volume `umami` ke `/db` di container menggunakan perintah `dokku storage:mount umami umami:/db`.
5. Di laptop komputer kamu, buatlah sebuah random string yang akan digunakan sebagai app secret menggunakan perintah `openssl rand -hex 32` atau perintah sejenis.
6. Set env var yang diperlukan: `dokku config:set umami DATABASE_URL=file:/db/umami.db APP_SECRET=secret_token`. Ganti `secret_token` dengan output dari poin 5.
7. Tambah domain/subdomain: `dokku domains:add dokku stats.example.com`. Ganti `stats.example.com` dengan domain kamu.
8. Nyalakan Let's Encrypt, atau install custom certificate yang didapat dari Cloudflare.
9. Atur port forwarding: `dokku ports:set umami http:80:3000 https:443:3000`.
10. Install Umami dengan perintah `dokku git:from-image umami ghcr.io/maxime-j/umami-sqlite:latest`.
11. Kunjungi domain Umami kamu dan pastikan proses instalasi berhasil. Jika berhasil, kamu akan diarahkan ke halaman login Umami. Masuklah dengan akun default seperti yang sudah dijelaskan [di sini](https://shop.adipurnm.com/products/self-hosting-dengan-dokku){: class="underline--dotted" }.
12. Selesai!

Dengan begini, saya masih tetap bisa pakai Umami tanpa harus install PostgreSQL. Sejauh ini tidak ada kendala.

Kalau kamu punya project yang ingin di-deploy menggunakan Dokku juga, saya nulis e-book gratis berjudul [Self-hosting dengan Dokku](https://shop.adipurnm.com/products/self-hosting-dengan-dokku).
