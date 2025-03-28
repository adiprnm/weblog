---
layout: default
title: Plaintext productivity
---

Belakangan saya cukup tertarik dengan konsep Plaintext Productivity. Singkatnya, kita menyimpan list todo, ide, wishlist, atau bahkan jurnal di dalam sebuah file polos: bukan file Microsoft Word, bukan Google Docs.

## Kenapa plaintext?

Sesederhana bahwa plaintext itu:

- Gratis. Nggak perlu bayar subscription bulanan.
- Sederhana dan *straightforward*. Sangat, sangat, sangat sederhana. Wong isinya cuma teks. Nggak ada formatting sama sekali.
- Bisa dibuka di semua jenis sistem operasi. Selama kita punya aplikasi teks editor seperti Notepad, Notepad++, Sublime Text, Vim, apapun. Biasanya tiap sistem operasi punya plain text editor bawaan masing-masing.
- Kita punya data kita sendiri. Data disimpan di perangkat masing-masing. Selama device nya berfungsi, selama itu juga kita bisa menambah todo, journal, wishlist, dan sebagainya.

## Tantangan utama

Tantangan utama saya sendiri adalah bagaimana cara menyinkronkan data yang ada di laptop dengan data yang ada di smartphone yang cukup praktis, tanpa perlu mengeluarkan biaya sepeserpun.


## The programmer way

Salah satu cara yang terpikirkan adalah dengan menyimpan data-data tersebut ke git repository di GitHub.

Karena di laptop saya udah ada NeoVim dan git client, yang jadi concern utama adalah text editor dan git client di Android.

# Markor dan MGit adalah koentji

Dengan sedikit research, saya akhirnya menemukan apa yang saya perlukan: MGit sebagai git client, dan Markor sebagai text editor.

Khusus MGit, kalau kita install dari Google Play, somehow aplikasinya nggak bisa dipakai. Jadi, harus install langsung dari APK-nya.

Saya dapat APK-nya [dari sini](https://f-droid.org/en/packages/com.manichord.mgit/). Untuk meyakinkan bahwa nggak ada malware atau spyware di APK tersebut, saya decompile dulu APK-nya dan minta ChatGPT untuk cek apakah ada kode yang berpotensi sebagai kode yang merugikan.

ChatGPT approved. Yasudah, saya imani saja, ahaha.

Setelah diinstall, perlu buat SSH private key dulu. Public key-nya kemudian disimpan di akun GitHub. Ini perlu dilakukan supaya proses sync berjalan seamless.

Kemudian, clone repository dan beri nama `markor`. Ini supaya kita menggunakan fitur Todo di Markor, yang datanya disimpan di file `todo.txt`. Simpan repository di dalam folder `Documents`.

Oiya, Markor ini punya 2 fitur utama, yaitu Todo dan QuickNote. Kita bisa mencatat apa yang harus dikerjakan di halaman Todo. Kalau kita tiba-tiba dapat ide, kita bisa catat dulu di QuickNote.

Selain 2 fitur tersebut, kita juga bisa membuka file lain. Sehingga, kita bisa menulis jurnal juga di sini.

2 hal lain yang nggak kalah bagus adalah ukurannya yang kecil dan nggak ada iklannya sama sekali! Yang paling terakhir yang paling oke sih. Biasanya di aplikasi macam begini, suka banyak dipasangin iklan. Jadinya cukup mengganggu. Alih-alih produktif, yang ada malah kesel duluan.

![Markor](/assets/images/2025/d799109a-1cf8-4db7-94fa-0f2ff8a5c78b.webp)
*Tampilan aplikasi Markor*

Untuk melakukan proses sinkronisasi, cukup push changes yang dilakukan di salah satu sisi, entah itu di laptop atau di smartphone. Kemudian, pull di sisi lainnya. Di smartphone, kita bisa pakai MGit untuk push/pull changes yang ada.

Plaintext Productivity system pun akhirnya sudah siap digunakan sehati-hari 🎉

Tentunya mekanisme sinkronisasi ini nggak wajib diterapkan. Ada yang cukup di salah satu sisi aja, entah itu di laptop atau di smartphone. Silahkan sesuaikan dengan kebutuhan masing-masing.
