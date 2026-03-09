---
layout: default
title: Projects
permalink: /project
description: List project personal dan komersial. Selain bikin aplikasi, saya juga nulis e-book.
---

<h2 class="mt-8">Aplikasi</h2>

**Aktif**{: class="sans-serif" }
* [AdiOnRails](https://adionrails.com){: .underline--dotted target="_blank" }: Belajar Ruby dan Rails dalam bahasa Indonesia
* [adipurnm's shop](https://shop.adipurnm.com){: .underline--dotted :target="_blank" }: Jual e-book, source code, dan produk digital lainnya
* [Bikin Aja Dulu](https://bikinajadulu.web.id){: .underline--dotted :target="_blank" }: Jual e-book, source code, dan produk digital lainnya
* [Kanyaah](https://kanyaah.com){: .underline--dotted :target="_blank" }: Undangan pernikahan digital
* [Wang](https://wang.bikinajadulu.web.id){: .underline--dotted target="_blank" }: Aplikasi financial tracker untuk keluarga.

**Nonaktif**{: class="sans-serif" }
* [ToWebP](https://towebp.adipurnm.my.id){: .underline--dotted target="_blank" }: Convert gambar apapun jadi WebP.
* [Mau Kemana Kita](https://maukemanakita.com){: .underline--dotted target="_blank" }: Homestay & Rental
* [Let's Blogging](https://letsblogging.xyz){: .underline--dotted target="_blank" }: Let's make blogging fun again
* [Cirian](https://cirian.my.id){: .underline--dotted target="_blank" }: bagikan tautan menarik di profilmu
* [Gawéeun](https://gaweeun.my.id){: .underline--dotted target="_blank" }: To-do apps. Focused.

**Finished Software**{: class="sans-serif" }
* [SimpleBlog](https://github.com/adiprnm/simpleblog){: .underline--dotted target="_blank" }: No-nonsense, self-hostable blogging platform.
* [SimpleStats](https://github.com/adiprnm/simplestats){: .underline--dotted target="_blank" }: No-nonsense, self-hostable website analytic platform.
* [Gawéeun](https://github.com/adiprnm/gaweeun){: .underline--dotted target="_blank" }: To-do apps. Focused.

<h2 class="mt-8">Boring Tools</h2>

Semua boring tools yang sudah saya buat dipindahkan [ke halaman ini](/tools).

<h2 class="mt-8">Plugins & Mini Apps</h2>

* [neotodotxt.nvim](https://github.com/adiprnm/neotodotxt.nvim){: .underline--dotted target="_blank" }: todo.txt in your NeoVim
* [betters3tui](https://github.com/adiprnm/betters3tui){: .underline--dotted target="_blank" }: aplikasi berbasis TUI untuk mengakses layanan penyimpanan S3-compatible, ditulis dalam bahasa Ruby.
* [id-calendar-tui](https://github.com/adiprnm/id-calendar-tui){: .underline--dotted target="_blank" }: aplikasi berbasis TUI untuk menampilkan kalender dan hari libur Indonesia, ditulis dalam bahasa Ruby.

<h2 class="mt-8">Produk Digital</h2>

<ul>
    {% for product in site.data.products %}
    <li><a href="{{ product.url}}">{{ product.name }}</a></li>
    {% endfor %}
</ul>
