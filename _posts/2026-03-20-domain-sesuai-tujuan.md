---
layout: default
title: Domain sesuai tujuan
tags: Blogging
---

Baru-baru ini saya mengembalikan domain ini menjadi domain .my.id kembali, setelah sebelumnya pakai domain .com.

Ingat dengan [tulisan ini](https://adipurnm.my.id/domain-my-id-jelek-di-mata-google)? Ya, awalnya saya beli domain adipurnm.com semata-mata hanya untuk menguji asumsi saya terhadap SEO di Google. Dan yah, sisanya bisa di baca saja di tulisan tersebut.

Nah, karena uji coba sudah selesai, saya pikir alangkah baiknya kalau dua domain ini saya gunakan sebagaimana mestinya. Domain .com/commercial saya gunakan untuk kepentingan komersil, seperti jualan produk digital. Domain .my.id saya gunakan untuk menulis hal-hal yang bersifat personal.

Sempat sedikit dilema, tapi pada akhirnya saya memantapkan niatan saya ini.

## Domain .com saya pakai WordPress, tapi akhirnya saya bikin ulang pakai Rails.

WordPress sebenarnya bagus-bagus aja, tapi seperti yang saya tulis di tulisan [Harga Sebuah Kebebasan](/harga-sebuah-kebebasan), saya akhirnya beralih ke Rails supaya fiturnya bisa saya custom sesuka saya.

Jika misal, suatu waktu saya ingin menambahkan fitur artikel premium, saya tinggal minta AI buat coding aja. Di WordPress, sepertinya perlu plugin tambahan, dan berbayar. Unless, kita bikin sendiri plugin-nya, yang mana ujung-ujungnya sama-sama ngoding sih.

Yang paling utama itu sebenarnya dari sisi scaling dan performa. Saya lebih familiar scale aplikasi Rails ketimbang WordPress. Dari sisi performa juga Rails terasa lebih cepat berkat bantuan Turbo. WordPress pun bisa-bisa aja sebenarnya pakai page/object cache. Cuma ya harus install plugin lagi.

Alasan lain adalah, semakin banyak plugin yang diinstall, semakin banyak menu-menu di halaman admin. Saya merasa bloated aja. Tiap buka WP Admin, menunya bejibun. Padahal saya cuma perlu beberapa menu aja.

Banyak plugin juga berarti menbuat website lebih rentan untuk diretas. Apalagi plugin-plugin yang sudah lama tidak pernah diupdate karena ditinggal oleh maintainernya, ini bisa jadi celah keamanan.

Sedangkan kalau bikin sendiri pakai Rails, saya tau semua kode yang saya buat. Dependensi eksternalnya paling ke gem untuk halaman admin. Sisanya dependensi bawaan Rails semua. Rasanya lebih tenang aja. Kalau ada apa-apa, saya bisa langsung tau bagaimana cara memperbaikinya.
