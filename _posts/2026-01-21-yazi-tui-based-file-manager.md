---
layout: default
title: Navigasi file manager tanpa mouse/touchpad dengan Yazi
tags: Tech
---

Masih di edisi navigasi tanpa mouse/touchpad. Setelah di tulisan sebelumnya saya bahas soal [navigasi browser tanpa mouse/touchpad](/navigasi-dengan-keyboard-di-browser-pakai-vimium), kali ini saya mau bahas navigasi file manager tanpa mouse/touchpad.

Beberapa waktu yang lalu, seseorang di Threads menyebutkan bahwa ada TUI-based file manager bernama Yazi. Saya penasaran, sepertinya cukup menarik buat saya yang sekarang ini lebih nyaman serba TUI.

Website resminya bisa diakses di [https://yazi-rs.github.io/](https://yazi-rs.github.io/).

Setelah saya install dan coba-coba, rupanya navigasi di Yazi mirip dengan Vim:

* `j` untuk memindahkan cursor ke bawah
* `k` untuk memindahkan cursor ke atas
* `l` untuk masuk ke direktori
* `h` untuk keluar dari direktori
* `/` untuk cari berdasarkan nama
* `v` untuk masuk ke select mode

Saya cukup sering melakukan kesalahan: tekan tombol `Enter` untuk masuk ke direktori tertentu, karena sudah terbiasa dengan file manager bawaan Ubuntu Mate.

Untuk mengurutkan file, tekan `,`, nanti akan muncul opsi lainnya, misal tekan `M` untuk mengurutkan file berdasarkan moditied time secara descending.

Yang menarik dari Yazi adalah, kita bisa melihat preview dari file secara langsung tanpa harus membuka file. Bukan hanya gambar dan video, tapi file lain, seperti plain text dan bahkan isi file zip juga.

Fitur ini yang saya suka dari Yazi, karena kita jadi nggak perlu repot-repot lagi buka file untuk memastikan file yang dibuka adalah file yang kita butuhkan atau nggak.

![Preview file di Yazi](/assets/images/2026/2026-01-21_13-31.webp)

Tentu saja, nggak semua file ada preview kontennya. Biasanya yang nggak bisa dilihat previewnya itu adalah file-file jenis rich document, macam Microsoft Word, LibreOffice Writter, dan sebagainya.

Satu lagi fitur yang saya suka adalah fitur go to:

- go to top, tekan `gg`
- go to home, tekan `gh`
- go to `~/Downloads`, tekan `gd`
- go to `~/.config`, tekan `gc`
- follow symlink, tekan `gf`
- jump interactively, tekan `g<space>`


Saya juga masih terus ekplor si Yazi ini, tapi sejauh ini sangat membantu proses navigasi jadi lebih cepat.



