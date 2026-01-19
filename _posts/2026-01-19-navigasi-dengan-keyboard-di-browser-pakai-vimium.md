---
layout: default
title: Navigasi tanpa mouse/touchpad di browser dengan Vimium
tags: Tech
---

Percaya deh, sekalinya kamu udah terbiasa dengan Vim keybinding, rasanya apapun ingin dipetakan kepada Vim keybinding, termasuk navigasi di browser. Pertanyaannya, emangnya bisa???

Jawabannya? Oh, tentu saja bisa.

Kenalin Vimium. Plugin sakti ini bisa membantu orang-orang yang sudah terbiasa dengan Vim keybinding mengoperasikan browser mereka dengan key-key yang hampir sama persis dengan Vim. Misalnya:

* Scroll ke bawah? Tekan `j`
* Scroll ke paling bawah halaman? Tekan `G`
* Scroll ke atas? Tekan `k`
* Scroll ke paling atas halaman? Tekan `gg`
* Pindah ke tab sebelah kanan? Tekan `gt`
* Pindah ke tab sebelah kiri? Tekan `gT`
* Search teks di halaman? Tekan `/` lalu ketik teks yang akan dicari
* dsb.

Ada beberapa pemetaan yang sedikit berbeda, tapi menurut saya masih masuk akal untuk use case pengoperasioan browser. Misal, `x` di Vim akan menghapus satu karakter, tapi di Vimium akan menutup tab aktif. Atau, `o` di Vim akan masuk ke mode Insert di baris baru, tapi di Vimium, akan membuka semacam URL bar seperti ini. Yaa fungsinya mirip-mirip lah dengan URL bar di browser.

![Vimium URL bar](/assets/images/2026/2026-01-19_15-58.webp)

## Bagusnya, Vimium ini sangat customizable

Kita bisa menyesuaikan keymap yang sekiranya perlu disesuaikan. Untuk kasus saya, saya menammbahkan mapping tambahan untuk pindah antar tab jadi lebih mudah. Karena saya pakai Firefox vertical tab, saya mapping `J` untuk pindah ke tab bawah, dan `K` untuk pindah ke tab atas. Jadi, navigasi antartab praktis sekali.

Selain keymap, kita juga bisa bikin semacam shortcut untuk pergi ke suatu halaman tertentu. Istilahnya itu Custom search engine. Saya kurang srek sih sama namanya, tapi ya sudahlah suka-suka creatornya aja, haha.

Ini sangat membantu saya untuk pergi ke halaman yang sering saya kunjungi, tapi di halaman tersebut perlu pasang filter tertentu, misal:

* halaman pull request di GitHub
  * `mpr` atau `My Pull Requests`, untuk melihat pull request yang sedang saya kerjakan.
  * `rpr` atau `Ready Pull Requests`, untuk melihat pull request yang sudah siap di-review.
* buka email dan calendar pakai email kantor
  * `gmail` untuk mengakses email kantor
  * `gcal` untuk mengakses kalender kantor
* buka halaman Vimium Options
* dsb

Cara menggunakannya, pencet `o` dulu, lalu ketik salah satu command, misal `mpr`, ditambah satu karakter spasi. Kalau nggak ditambah spasi, yang muncul nanti Majelis Permusyawaratan Rakyat di Google 😝

Gimana? Tertarik pakai plugin ini?
