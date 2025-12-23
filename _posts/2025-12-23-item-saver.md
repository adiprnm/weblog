---
layout: default
title: "Boring tools baru: Item Saver"
tags: SideHustle
---

Sebenarnya nggak bisa dibilang baru juga. Tools ini saya buat udah cukup lama. 29 Februari 2024. Hampir dua tahun yang lalu.

Saya baru ingat pernah bikin ini tools ini ketika lagi iseng scroll list repository GitHub. Langsung saja, saya migrasikan ke halaman Boring Tools.

Latar belakangnya simpel aja: saya malas select nomor rekening di HP setiap kali mau bayar tagihan atau transfer ke nomor rekening tertentu. Saya ingin langsung ada tombol untuk salin teks biar ga usah repot-repot select text lagi. Konyol ya? Ahaha.

Ketika migrasi, saya kepikiran sesuatu. Sebenarnya, bisa jadi data yang disimpan itu nggak selalu nomor rekening atau tagihan. Bisa juga berupa link tulisan/video yang menarik, atau apapun yang bisa disimpan dalam bentuk teks.

Saya refactor lah sedikit nama fungsi dan varible nya. Plus, nambah fitur import dan export JSON untuk mempermudah pindah antardevice.

Tools ini sama seperti tools-tools lainnya. Tidak ada mengirim data ke server manapun. Data disimpan di local storage browser. Hanya aplikasi client-side sederhana. Nggak percaya? Inspect element sendiri aja 😛

Nama tools-nya [Item Saver](/tools/item-saver). Saya sarankan akses dari mobile browser aja, biar lebih aman karena di browser biasanya nggak ada plugin apapun yang terinstall.

Kalau pun mau diakses dari browser, pastikan nggak ada plugin browser jahat yang diam-diam spy local storage kamu ya. Resiko ditanggung sendiri.

Semoga bermanfaat!
