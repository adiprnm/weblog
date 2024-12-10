---
layout: default
title: Jangan Pakai ORM, Kalau...
permalink: /jangan-pakai-orm-kalau-begini
image: /assets/images/adi-og.jpg
---

Beberapa waktu lalu, di X ada perdebatan menggunai apakah penggunaan Object Relational Mapper (ORM) itu diperlukan atau tidak.

Ternyata cukup banyak orang yang kontra terhadap penggunaan ORM. Alasannya macam-macam.

Ada yang bilang performance jadi jelek, ada juga yang bilang kalau bisa langsung raw query, kenapa harus pakai ORM. Bahkan ada juga yang bilang bahwa penggunaan ORM cukup menyulitkan pengembang untuk melakukan tracing karena nama tabel jadi disamarkan (saya penasaran tentang ini).

Setelah saya pelajari, orang yang misuh-misuh di X terkait penggunaan ORM ini kemungkinan adalah orang-orang yang arsitektur aplikasinya menerapkan arsitektur microservice, yang mana tiap service bisa saja menggunakan bahasa pemrograman yang beda-beda.

Coba bayangkan, misal ada 3 service yang ditulis dengan 3 bahasa yang berbeda, masing-masing bahasa mempunyai ORM-nya masing-masing, dengan API ORM yang berbeda-beda. Otomatis pengembang tersebut harus paham dengan API ORM tiga bahasa tersebut.

Itu baru tiga bahasa. Gimana kalau misalnya 5 servis dengan 5 bahasa? Atau mungkin 10 service dengan 10 bahasa berbeda?

Inilah sebabnya menurut saya pribadi penggunaan raw query memang lebih cocok dipakai di arsitektur microservice. Dengan menggunakan raw query, kita nggak terhalang dengan API ORM yang berbeda-beda tiap bahasa. Karena ya sintaksnya sama: SQL.

Kekurangan dari raw query adalah kita harus menulis kode lebih panjang ketimbang pakai ORM. Kita juga harus melakukan mapping hasil query secara manual ke dalam suatu struktur data tertentu. Menurut saya pribadi ini cukup berpengaruh terhadap DevEx.

Bagi saya pribadi, developer experience ini merupakan satu hal yang cukup penting. Menulis kode yang terlalu panjang dan repetitif itu melelahkan dan memakan waktu. ORM bisa membuat penulisan query jadi lebih sederhana dan ringkas. Kita bisa lebih fokus solve problem bisnis daripada hal-hal teknis.

ORM bikin lemot? Namanya juga tradeoff. Tapi menurut saya nggak akan se-lemot banget itu. Paling selisih sekitar 50ms. Ini tergantung juga sih sebenarnya. Kalau ngejar response time under 300ms ya angkanya lumayan. Tapi menurut saya pribadi masih worth-it banget, apalagi dituker dengan produktivitas ngoding.

“Susah kalau mau buat query yang kompleks di ORM”.

Kalau sekompleks itu dan perlu raw query, tiap ORM punya API untuk mengeksekusi raw query secara aman.

Tapi ya seperti biasa, ujung-ujungnya pasti tergantung prioritas dari produk kita itu apa. Kalau perlu low latency, semacam aplikasi keuangan atau transportasi online, ORM sepertinya memang bukan pilihan yang tepat. Kalau B2B dan perlu delivery time lebih cepat, ORM bisa jadi penyelamat.

There’s no silver bullet, after all. Choose the one that fits your product priority.
