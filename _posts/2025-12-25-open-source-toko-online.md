---
layout: default
title: Toko online saya sekarang open source!
tags: SideHustle
---

Beberapa waktu lalu, tiba-tiba saya kepikiran untuk meng-open-source-kan toko online saya. Hitung-hitung sebagai bentuk giving back to the community.

Toko online yang saya buat ini sangat sederhana. Di deskripsi repo-nya pun saya tulis "dead simple online store", haha.

Bukan tanpa alasan. Memang sengaja dibuat begitu. Biar pengunjung bisa langsung cek barang tanpa banyak distraksi. Tertarik? Masukin keranjang, terus checkout. Nggak tertarik? Tinggal lihat-lihat produk lain aja.

No bloated feature. Cuma fitur dasar sebagaimana sebuah toko online seharusnya bekerja.

Masih ada yang perlu beberapa yang dikembangkan. Misal, sekarang halaman Syarat dan Ketentuan dan konten email sekarang masih statis. Nanti kalau sudah ada energi untuk enhance, akan saya coba enhance.

Atau, kalau kamu mau contribute, boleh banget! Hehe. Silahkan fork [repository ini](https://github.com/adiprnm/shop-rails){: target="_blank" }, lalu buka pull request aja.

## Tech stack

* Ruby on Rails
* Hotwire
* StimulusJS
* SQLite
* PicoCSS

## Minimum server requirements

* 2GB RAM
* 1 vCPU

Kalau sewa VPS, biasanya sekitar Rp75.000 s.d. Rp85.000 per bulan.

## Fitur utama

**Admin**

* Dashboard
* CRUD produk
* CRUD kategori produk
* Manajemen pesanan
* Manajemen donasi
* Tes email delivery
* Pengaturan toko online

**End User**

* List semua produk
* List produk per kategori
* Detail produk
* Keranjangi produk
* Checkout produk
* List dukungan/donasi
* Kasih dukungan/donasi
* Integrasi dengan Midtrans
* Kirim email
  * Notifikasi pembeliak ke email pemilik toko
  * Invoice dan akses ke produk digital ke email pembeli

## Needs improvements

* Ubah konten-konten statis menjadi dinamis
* Support produk fisik
* Support payment gateway selain Midtrans
