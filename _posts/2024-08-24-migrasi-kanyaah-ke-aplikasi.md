---
layout: default
permalink: /proses-migrasi-kanyaah-ke-aplikasi-web
title: Migrasi Kanyaah ke Aplikasi Web
image: /assets/images/adi-og.jpg
---

Saya punya side hustle kecil-kecilan. Namanya **[Kanyaah](https://kanyaah.com)**. Fokus ke undangan online, khususnya pernikahan. Tapi sekarang udah mendukung undangan khitan juga.

Saya melihat bisnis yang berkaitan dengan pernikahan nggak akan ada matinya. Terbukti dari jumlah order yang diterima. Meskipun nggak banyak sih, tapi dengan promosi yang sangat minim, jumlah order segitu menurut saya lumayan untuk nambah-nambah uang jajan.

Bikin undangannya pakai WordPress. Tambah Elementor sebagai page builder. Saya juga install beberapa plugin lainnya untuk mendukung beberapa fitur yang saya inginkan.

Masalah utamanya, setiap ada pesanan baru, saya harus input data undangan secara manual. Padahal prosesnya ya gitu-gitu aja. Isi data mempelai, isi informasi acara, dsb.

Repetitif sekali. Masih oke kalau sedang senggang, tapi kalau lagi packed, duh, repot.

Akhirnya, terbesitlah ide untuk dibuat aplikasi web. Walaupun background saya di backend development, saya juga punya basic di frontend development. Walaupun nggak jago-jago amat sih, haha.

Tapi bikin aplikasi undangan ini harusnya nggak ada tampilan yang macam-macam. Nggak perlu animasi yang fancy. Asalkan kebutuhan user terpenuhi, dan aplikasinya gampang dipakai, harusnya oke sih.

Dimulailah proses pengembangan aplikasi tersebut. Pakai tech stack yang simpel dan saya pede aja. Saya kerjakan di sela-sela pekerjaan utama saya.

Setelah kurang lebih 3 bulan pengembangan, akhirnya aplikasinya jadi. Sesuai dengan apa yang saya bayangkan.

PR selanjutnya adalah migrasi undangan yang sudah ada ke aplikasi. Saya buat script sendiri untuk ini. Harus input ulang secara manual data-datanya. Ini proses yang paling membosankan sih.

Untungnya, WordPress menyediakan REST API untuk mendapatkan ucapan dan konfirmasi kehadiran dari satu undangan. Tinggal saya olah sedikit aja.

Setelah semua undangan termigrasi, saya arahkan domain [https://kanyaah.com](https://kanyaah.com) dari shared hosting WordPress ke aplikasi tersebut. Dan yap, akhirnya website [https://kanyaah.com](https://kanyaah.com) menjadi seperti sekarang.

![Kanyaah Undangan Digital Online Pangandaran custom langsung jadi](/assets/images/2024/08/kanyaah.jpeg)
*Tampilan web Kanyaah yang baru*

Oiya. Di aplikasi ini, pembayaran undangan udah pakai payment gateway. Jadi, pengguna nggak perlu konfirmasi pembayaran lagi. Undangan akan langsung aktif setelah pembayaran berhasil.

Sekarang, saya bisa lebih fokus untuk promosi dan support jika ada pengguna yang mengalami kendala.

Yang tahun ini mau menikah, atau punya anak yang akan khitan, bisa banget buat undangan di **[Kanyaah](https://kanyaah.com)**. Prosesnya cepet kok, cuma 10 menit 😁
