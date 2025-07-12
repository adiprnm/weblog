---
layout: default
title: Pelajaran yang diperoleh dari artikel Rewrite it in Rails
tags: Programming
---

Kalau biasanya rewrite itu dari Rails ke Golang/Rust/bahasa pemrograman lain yang lebih baik dari sisi performa, penulis yang satu ini malah rewrite dari Rust ke Rails.

Tulisan yang cukup menarik, dan mungkin bisa membuka perspektif kita tentang dunia software development. Judulnya yaitu [Rewrite it in Rails](https://dirkjonker.bearblog.dev/rewrite-it-in-rails/).

Ceritanya, penulis ngembangin satu aplikasi pakai Rails. Aplikasi tersebut ternyata semakin berkembang. Cukup berkembang sehingga penulis bisa hire programmer lain untuk membantu pengembangan aplikasi.

Penulis kemudian ngembangin "versi 2" dari aplikasi. Pakai Rust dan SvelteKit. Secara performa, hasilnya lebih cepat daripada pakai Rails, tapi:
- ketimbang nulis business code, penulis lebih banyak ngurusin hal-hal teknis
- kode Rails semakin banyak fitur baru, dan fitur yang udah ada makin dilengkapi dan diperbaiki lagi. Rewrite makin sulit
- kode Rust tidak terlalu memberikan impact kepada user.

Untuk "menghibur diri", penulis menanggap menulis dengan kode Rust itu sebuah investasi. Tapi, semakin waktu berjalan, penulis sadar bahwa memang ada beberapa investasi yang nggak akan berhasil.

Akhirnya, penulis memutuskan untuk rewrite stack yang baru ke Rails.

Hasilnya:
- lebih fokus nulis business code daripada ngurusin hal-hal teknis
- lebih produktif:
  - ngembangin fitur baru
  - enhance fitur yang udah ada
  - update UI
  - fix bug
- punya lebih banyak waktu ngobrol sama user buat dapet feedback secara langsung.

Dari sisi bisnis, ini termasuk huge win: develop cepat, deliver cepat, dapet feedback cepat, user happy.
## Key Takeway

Dari tulisan di atas, kita dapat beberapa insight.
### Nggak melulu soal performance

Performance memang penting, tapi terkadang kecepatan dan kompleksitas development lebih penting daripada performance.
### Fast enough is enough

Menurut penulis artikel tersebut, meskipun kode yang ditulis pakai Rust pasti lebih cepat, faktanya user nggak terlalu merasakan perbedaan yang begitu berarti.

Ini karena di kode Rails sendiri, di halaman yang paling berat, response time P95 nya ada di angka 338ms. Dan menurut penulis, ini masih bisa ditingkatkan.

Aplikasi akan terasa sangat snappy jika response time-nya maksimal 300ms. Di dunia UX, ini disebut sebagai **perceived performance**. Saya rasa selisih 38ms nggak akan terlalu memengaruhi pengalaman pengguna saat pakai aplikasi.

### Software development adalah permainan tradeoff

Rewrite ke Rails sudah pasti ada tradeoff-nya.
- secara performance, nggak sekencang Rust
- rentan terhadap runtime error, misal error karena memanggil method pada variable yang nilainya null.
Dengan tradeoff-tradeoff tersebut, kita perlu bijaksana dalam mengambil keputusan. Dibandingkan dengan keuntungan yang akan diperoleh, apakah tradeoff-tradeoff tersebut masih bisa diterima atau tidak.

Ini balik lagi ke kebutuhan. Memilih tech stack adalah komitmen jangka panjang, jadi harus dipikirkan matang-matang.
### Selama masih bisa ditingkatkan, tingkatkan yang udah ada

Rewrite aplikasi itu ibarat bikin lagi dari 0, tapi dengan jalan yang lebih terarah.

Meskipun begitu, rewrite aplikasi bukan satu-satunya solusi untuk meningkatkan performance.

Bisa jadi bottleneck-nya di database. Bisa jadi karena kodenya bertele-tele, padahal ada approach yang lebih sederhana dan lebih efisien.

Identifikasi dulu masalahnya di mana. Selama masih bisa ditingkatkan, tingkatkan dulu yang ada sekarang. Jangan buru-buru rewrite.

***

Oiya, buat temen-temen yang masih awam dengan proses deployment aplikasi ke server, saya nulis e-book Self-hosting dengan Dokku. [Unduh di sini, gratis!](https://shop.adipurnm.my.id/products/self-hosting-dengan-dokku/)