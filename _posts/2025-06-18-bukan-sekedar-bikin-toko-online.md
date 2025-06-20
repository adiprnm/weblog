---
layout: default
title: Ini bukan sekedar bikin toko online semata
tags: personalbranding
---

Beberapa hari belakang ini, seperti biasa, di sela-sela kesibukan kerja full time, saya menyempatkan diri untuk bikin project kecil-kecilan.

Bukan project yang fancy, hanya project biasa, yaitu online shop. Sudah bisa diakses di [https://shop.adipurnm.my.id](https://shop.adipurnm.my.id).

Rencana awalnya, saya ingin buat pakai WordPress aja, sekalian ngulik WordPress. Bagaimanapun, saya bisa terjun ke dunia web dev salah satunya karena saya mengenal WordPress ketika masa SMP.

Di samping itu, market WordPress sepertinya akan tetap ada, terutama di Indonesia. Sehingga, saya rasa cukup worth itu untuk belajar WordPress, syukur-syukur kelak bisa dapat penghasilan dari sini.

## Masalahnya di WordPress itu...

WordPress ini ingin saya deploy ke VPS saya via Dokku. Akhirnya bisa sih, tapi saya nggak happy dengan memory usage-nya.

Entah saya salah pick image docker atau karena emang pada dasarnya memory usage nya segini. Satu container WordPress aja makan memory sampai hampir 400 MB. Ditambah container MariaDB yang sampai 100MB. Total kurang lebih 500MB-an.

Sedangkan, kalau pakai Rails + SQLite + Solid Trifecta, meskipun terkenal karena memory usage nya yang cukup gede, tapi nggak segede WordPress.

Satu proses web memakan memory sekitar 120MB, sedangkan satu proses worker menghabiskan memory sekitar 210MB. Selisihnya cukup besar, sekitar 170MB.

## Selain memory usage, saya juga ingin online store nya minimalis seperti blog ini

Saya pribadi sangat puas dengan desain blog ini. Sederhana dan minimalis. Nggak ada animasi atau transisi yang fancy. Nggak perlu ada komponen yang aneh-aneh. Nggak ada JS (kecuali tracking visitor aja :p). Hanya ada saya dan tulisan-tulisan saya.

Bukan karena skill issue, tapi karena memang sengaja dibuat begini.

Toko online saya pun inginnya begitu. Nggak perlu ada animasi yang fancy. Nggak perlu ada komponen yang aneh-aneh. Hanya ada produk-produk yang saya jual, baik produk fisik maupun produk digital.

Yang paling penting, apa yang saya tulis dan jual memberikan value kepada pembaca atau pembeli.

Bikin toko online dengan desain semirip mungkin dengan blog ini di WordPress sepertinya bisa-bisa aja. Cuma entahlah, mungkin karena skill issue, jadi saya kok ngerasanya cukup ribet ya. Ditambah, saya juga pengen toko online ini cepat selesai.

Akhirnya ya sudahlah, pakai Rails aja.

## Bukan sekedar tech stack, lebih dari itu tentang memutuskan personal branding

Sebenarnya saya udah punya code base-nya di [https://me.bikinajadulu.web.id](https://me.bikinajadulu.web.id) (sekarang ini saya terminate dulu). Hanya saja, somehow saya ngerasa nggak cukup happy dengan itu.

Mungkin karena dilematis juga kali ya, tentang personal branding. Di satu sisi, saya ingin dikenal sebagai kreator dibalik [Bikin Aja Dulu](https://bikinajadulu.web.id). Di sisi lain, saya nyaman jadi diri sendiri, yang bisa sharing apapun, nggak melulu soal programming atau tech lainnya.

Menjalani dua peran begini cukup berat juga. Saya pikir, "wah nggak bisa nih begini terus, harus pilih salah satu".

Setelah tau Unbranded Personal Branding-nya mas Tira (saya belum beli course-nya, tapi kurang lebih tau intinya apa, nah loh), saya mutusin buat ingin dikenal sebagai Adi aja, yang senang bikin project-project kecil dan nulis apapun di blog.

Bikin Aja Dulu akan tetap eksis sebagai tempat untuk menampung project-project komersial saya.

## Meskipun begitu, saya masih tetap ingin ngulik WordPress

Bukan di project kali ini, tapi di project-project ke depannya. Ada beberapa needs yang sepertinya bisa diselesaikan dengan WordPress.

## Catatan tambahan

Oiya, dengan rilisnya toko online sederhana ini, maka website [https://me.bikinajadulu.web.id](https://me.bikinajadulu.web.id) akan di-terminate secara permanen. Semua produk (baru dua aja sih, haha) yang ada di website tersebut udah dipindahkan semua ke toko online yang baru.

Semoga dengan adanya toko ini saya bisa jualan lebih semangat lagi.
