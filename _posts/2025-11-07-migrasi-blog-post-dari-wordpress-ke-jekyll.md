---
layout: default
title: Migrasi blog post dari WordPress ke Jekyll
tags: Blogging UpdateKehidupan
---

6 Novembar jadi hari di mana saya selesai migrasi blog post dari WordPress ke blog ini, yang mana dibangun pakai Jekyll.

Proses migrasi ini cukup tedious: saya harus copy-paste tulisan saya satu persatu, sambil sortir tulisan. Tulisan mana aja yang akan di-migrasi, mana yang nggak usah. Kata ganti "gue" dan "gw" saya ganti jadi "saya" supaya konsisten.

Sebenarnya belum terbiasa aja pakai lu-gue, bagi orang kampung macam saya rasanya aneh aja, haha. Saya lebih nyaman pakai saya/aku-kamu, yang saya yakin, akan terasa aneh juga bagi orang-orang Jakarta.

Kembali ke topik utama. Seingat saya WordPress menyediakan fitur untuk export post, tapi:

1. saya belum pernah pakai, jadi nggak tau hasilnya apakah berupa langsung file markdown yang siap publish atau format lain yang tetap perlu manual work
2. akun WordPress saya di-ban Automattic 🥲

Sayangnya, saya nggak bisa memulihkannya karena saya kehilangan akses ke email yang terdaftar di WordPress. Tapi, website masih bisa diakses aja udah untung. Kalau sampai website saya dihapus juga, duh sayang banget.

Total ada sekitar 67 post yang saya copy-paste secara manual, dan perlu waktu sekitar 3 hari.

Selama proses migrasi, rasanya seperti masuk ke kapsul waktu. Membaca tulisan-tulisan di masa yang masih labil, cukup labil untuk menentukan apakah mau pakai saya/gue.

Yang menariknya lagi, dengan sedikit Google Dorking, saya malah menemukan blog saya di tahun 2012. Saya sendiri malah nggak ingat pernah bikin blog ini.

13 tahun yang lalu, saya udah mulai ngeblog yang beneran ngeblog, nggak asal copas artikel orang lain. Dan kesenangan itu masih berlanjut sampai sekarang.

Tapi, kalau baca-baca tulisan tahun 2012, rasanya geli juga, haha. Maklum, dulu masih mencari minat saya di mana. Beda dengan salah satu teman saya yang tertarik di dunia otomotif, makanya isinya dulu seputar motor semua.

![Arsip Blog](/assets/images/2025/2025-11-07_22-44.webp)
*Arsip blog setelah migrasi*

Melihat gambar di atas, rasanya antara percaya nggak percaya bahwa ternyata udah 11 tahun waktu. Waktu berlalu sangat cepat. Rasanya baru kemarin saya diperkenalkan dengan Google oleh guru saya di mata pelajaran TIK, yang atas dasar itu, saya jadi tertarik dan akhirnya berkarir di bidang IT.

Dengan migrasi ini juga saya jadi punya ownership 100% terhadap tulisan-tulisan saya. Enaknya pakai static site generator macam Jekyll, blog kita jadi terhindar dari vendor lock-in. Kita masih punya source code-nya, lengkap dengan tulisan yang di-publish. Blog kita juga jadi lebih ringan, karena hasil akhirnya berupa file HTML statis, sehingga nggak ada layer tambahan untuk query ke database dan hal-hal lainnya.

Saat tulisan ini dibuat, blog ini di-host di GitHub. Jika sewaktu-waktu saya ingin memindahkannya, misal ke layanan lain atau home server, saya bisa memindahkannya dengan mudah. Nggak ada lagi akun di-ban oleh provider.
