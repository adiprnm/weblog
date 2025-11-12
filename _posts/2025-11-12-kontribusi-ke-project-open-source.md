---
layout: default
title: Tentang kontribusi terhadap project open source
tags: Programming OpenSource
---

Beberapa hari ini saya sedang eksplorasi cara convert file markdown jadi sebuah e-book format PDF dan E-pub. Beberapa yang sudah saya coba:

- **Pandoc**. Ini program CLI yang cukup lengkap. Tapi saya kurang suka karena terlalu bloated, dan entahlah, sepertinya nggak bisa custom font karena di belakang layar dia pakai LaTex.
- **Bikin sendiri**. Idenya, file markdown dikonversi jadi HTML. Kemudian, pakai headless Chrome untuk convert jadi PDF. Karena pakai headless Chrome, sebagian besar CSS sudah di-support, jadi lebih mudah atur stylingnya. Untuk generate E-pub, pakai library berbeda dengan generate PDF.
- **Kitabu**. Ini adalah framework yang didesain untuk membuat e-book dari file-file markdown. Pembuat library-nya sama dengan pembuat library yang saya pakai untuk generate Epub di poin 2.

Versi kitabu yang saya install adalah versi 3.1.0. Di versi ini, ada dua bug yang cukup mengganggu.

Bug pertama: list item daftar isi menampilkan semua isi tulisan ketimbang judul tulisan. Setelah saya telusuri, ternyata bug ini udah fixed di edge version. Jadi, saya akhirnya pakai edge version aja.

Saya kira dengan pakai edge version semua masalah selesai. Rupanya belum.

Ada bug kedua: urutan daftar isi tidak sesuai jika jumlah chapter di atas 10. Ini karena nama file HTML yang di-generate formatnya `section_<index>.html`, di mana `index` ini berupa angka dari 0 sampai jumlah chapter - 1.

Kalau jumlah chapternya maksimal 10, hasilnya masih sesuai. Kalau jumlah chapternya di atas 10, maka urutannya jadi begini

```
section_0.html section_1.html section_10.html section_2.html ...
```

Sehingga, untuk fix bug ini, format angka di bawah 10 harus ditambah angka 0 di depannya.

Yang saya suka dari Ruby adalah, saya bisa dengan mudah melakukannya dengan memakai method `rjust`, misal `1.to_s.rjust(2, "0")` akan menghasilkan `01`, sedangkan kalau `10.to_s.rjust(2, "0")` hasilnya tetap `10`.

Saya sudah coba di local saya dan hasilnya sesuai yang saya harapkan. Saya lalu submit PR untuk fix-nya [di sini](https://github.com/fnando/kitabu/pull/73). Tinggal menunggu yang punya reponya untuk review. Sepertinya akan cukup lama karena last update-nya 1 tahun yang lalu.


## Kontribusi ke open source nggak harus bikin kode yang sulit

Kontribusi ke open source pada dasarnya sederhana: kamu pakai tools-nya, lalu lihat ada sesuatu yang bisa diimprove atau di-fix, kemudian buka PR baru untuk itu. Ini bisa berupa bantu update dokumentasi, mini enhancement, atau bug fix sederhana seperti yang saya lakukan.

Saya juga pernah mengajukan mini enhancement [di repo ini](https://github.com/thutterer/initials/pull/5). Ceritanya juga mirip dengan kitabu, diawali dengan saya pakai toolsnya terlebih dahulu.

Library tersebut saya pakai di Kanyaah untuk generate gambar inisial nama tamu. Saya submit PR tersebut karena saya kurang srek dengan text opacity yang di-hard code, sehingga nampak lebih gelap.

Tapi kontribusi ke project open source jangan berharap akan langsung fast response ya, apalagi sampai mention dan maksa buat review kerjaan kita. Maintainer juga punya kesibukan masing-masing. Mengerjakan itu di sela-sela kesibukannya bisa jadi karena hobi saja dan memang berniat berbagi kepada orang lain, sehingga bukan top priority-nya maintainer.

Jadi, ya tunggu di balas aja, meskipun di project yang cukup jarang update, dibalasnya bisa bulanan atau tahunan, atau bahkan nggak dibalas sama sekali.

Oiya, biasanya maintainer akan membuat sebuah dokumen bernama `CONTRIBUTING.md` yang berisi panduan untuk berkontribusi terhadap project tersebut. Pastikan baca dan pahami ini dulu sebelum mau kontribusi ya!


## Kontribusi sebagai bentuk terima kasih

Kita memang nggak diwajibkan untuk berkontribusi. Kontribusi di software open source itu sifatnya sukarela.

Saya memaknai kontribusi ke open source sebagai bentuk terima kasih sekaligus dukungan kepada maintainer, karena tools yang mereka kembangkan dan bagikan secara gratis sangat membantu kita menyelesaikan permasalahan yang ada.

Sudah 8 tahun saya hidup di dunia open source, mulai dari OS Linux hingga software sehari-hari yang digunakan. Dunia OSS lah yang secara langsung maupun tidak langsung membantu dan menemani saya hingga bisa sampai di titik ini. Sehingga, saat ada kesempatan untuk kontribusi, tentunya saya akan berusaha untuk selalu kontribusi.