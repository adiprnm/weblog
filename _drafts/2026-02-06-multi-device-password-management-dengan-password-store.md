---
layout: default
title: Multi-device password management dengan Password Store
tags:
---

Beberapa waktu lalu saya mulai menaruh perhatian terhadap aplikasi password manager. Ada beberapa layanan yang bisa digunakan dengan biaya layanan yang miring, bahkan gratis. Tapi, bukan Adi namanya kalau tidak mempersulit diri, haha.

Untuk kasus password manager, saya ingin kepemilikan 100%. Sama persis seperti blog. Jadi, nggak bergantung ke satu layanan tertentu.

Saya teringat mas Rizqi, penulis blog [BanditHijo](https://bandithijo.dev){: target="_blank" }, pernah mention password manager bernama `pass`. Sepertinya cukup menarik untuk dicoba.

Ternyata, kabar baiknya pass ini ada aplikasi Android-nya. Owner aslinya udah nggak maintain sih, tapi ada orang baik yang bersedia maintain dan fork repo-nya [di sini](https://github.com/agrahn/Android-Password-Store){: target="_blank" }.

Dengan ini, keinginan saya untuk memiliki 100% encrypted password saya sendiri dapat direalisasikan.

Untuk proses sinkronisasi password antarperangkat, saya pakai Git. Jadi, password saya tersimpan di sebuah private repository di GitHub. Lalu, setiap ada perubahan, saya push perubahannya ke GitHub. Di masing-masing device, bisa lakukan sync password supaya tetap up-to-date.

Jadi:
* untuk auto-fill password di browser, saya pakai plugin Browserpass
* untuk auto-fill password di smartphone saya pakai aplikasi Android Password Store.

Setupnya agak cukup ribet, karena harus melakukan step-step berikut:
* generate GPG key dulu
* initialize password store pakai GPG key
* tambahkan beberapa password ke password store
* buat private repository di GitHub
* push changesnya ke GitHub
* import secret key di smartphone
* generate SSH public & private key
* simpan public SSH key di akun GitHub
* clone private repository github di smartphone
* password store siap digunakan

Bagi orang yang nggak mau ribet, saran saya sudah pakai aja layanan yang udah ada, macam Bitwarden atau 1Password. Tapi kalau emang mau ribet, silahkan pakai cara saya ini. Kalau kurang lengkap, tanya-tanya AI sedikit harusnya akan membantu.

## Gotcha: Android Password Store nggak works di Google Chrome

Ini ngeselin sih memang. Udah coba segala cara, masih saja gagal dipakai. Padahal, di Firefox dan Brave. auto fill Android Password Store fiturnya berfungsi dengan baik.

Saran saya, stop cari cara supaya bisa works. Ganti browser default aja jadi Brave Browser atau browser lain yang bisa pakai auto-fill username dan password.
