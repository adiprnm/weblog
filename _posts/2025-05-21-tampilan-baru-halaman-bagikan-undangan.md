---
layout: default
title: Tampilan baru halaman Bagikan Undangan
tags: tech programming side-hustle
---

Di [tulisan saya sebelumnya](/garap-lagi-kanyaah), saya bilang akan revamp halaman Bagikan Undangan. Jadi, tulisan ini adalah tulisan untuk update progress revamp halaman.

Sebelum update progress, sebagai perbandingan, mari kita lihat dulu gimana tampilan halaman Bagikan Undangan sebelum di-revamp.

## Sebelum revamp

Ini tampilan halaman Bagikan Undangan sebelum di-revamp.

![Tampilan halaman Bagikan Undangan sebelum di-revamp](/assets/images/2025/c0f82ee1-ee16-473d-ab96-8de24981247d.jpg)
*Tampilan halaman Bagikan Undangan sebelum di-revamp*

Saya ngerasanya tampilan ini terlalu sesak. Terlalu banyak aksi yang dapat dilakukan dalam satu halaman:
- edit teks undangan
- tambah tamu undangan
- cari tamu undangan
- bagikan undangan.

Sangat tidak user-friendly.

Ini juga yang mungkin jadi alasan mengapa beberapa user masih nanya saya gimana caranya sebar undangan, meskipun saya udah nyediain fiturnya.

## Setelah revamp

Begini tampilan setelah di-revamp.

![Tampilan halaman Bagikan Undangan](/assets/images/2025/cfbfef30-70bb-4f9b-b652-5486a28c8695.jpg)
*Tampilan halaman Bagikan Undangan*

![Tampilan halaman Tambah Tamu Undangan](/assets/images/2025/d4aae685-60be-463c-a0d6-d853d8b67b9b.jpg)
*Tampilan halaman Tambah Tamu Undangan*

![Tampilan halaman Daftar Tamu Undangan](/assets/images/2025/9366125f-5101-49a7-8965-5bfbedef2fb1.jpg)
*Tampilan halaman Daftar Tamu Undangan*

Ada beberapa perubahan:

1. Di halaman tamu undangan, hanya menampilkan 5 nama tamu yang baru ditambahkan.
2. Tambah tamu undangan dan list tamu undangan dipisah jadi halaman baru. List tamu undangan diurutkan secara alfabet untuk memudahkan proses pencarian.
3. Atur teks undangan masih di halaman yang sama, tapi sekarang jadi auto-save.

Dengan begini, user bisa lebih fokus pada tujuan utama halaman ini dibuat, yaitu untuk mempermudah proses sebar undangan.

## Sekalian ganti ukuran font

Selain update Bagikan Undangan, saya juga melakukan penyesuaian ukuran font di mobile.

Ukuran versi sebelumnya rasanya terlalu besar, sehingga memakan cukup banyak space di layar smartphone. Kalau layar smartphone nya cukup besar nggak masalah, kalau layarnya kecil, jadi cukup repot buat mengatur informasi undangan.

Makanya, saya sekalian aja ganti jadi `text-sm md:text-base` dan `placeholder:text-sm md:placeholder:text-base` di hampir setiap halaman, kecuali landing page.

Yap, landing page memang ukurannya sengaja nggak diubah, supaya user bisa lebih notice dengan penawaran-penawaran yang ada di Kanyaah.

## Mulai garap template baru

Habis ini sepertinya akan mulai garap template baru. Ditunggu yaa! Saya usahakan bagus, elegan, dan bisa menggeser template [Grey Vintage](https://kanyaah.com/templates/3/preview){:target="_blank"} dari tahta template yang paling banyak dipesan 😄
