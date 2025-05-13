---
layout: default
title: Kenalan dulu sama solid trifecta
tags: tech programming RubyOnRails
---

Ada satu premis yang menarik perhatian saya menjelang rilisnya Rails 8, yaitu: bagaimana jika database, yang selama ini digunakan untuk menyimpan data, justru digunakan sebagai backend untuk caching, queueing, dan websocket?

Tentunya premis ini bukan tanpa alasan. Sebagaimana yang kita tau, saat ini teknologi penyimpanan udah semakin canggih, murah, dan cepat. Beda dengan tiga dekade lalu. Meskipun tidak secepat in-memory database, tapi berdasarkan hasil benchmark, ternyata selisih nilai performanya yang cukup kecil dan dapat diterima.

Inilah yang melandasi dikembangkannya Solid Trifecta di Ruby on Rails: Solid Queue, Solid Cache, dan Solid Cabel.

Dari namanya aja rasanya udah cukup jelas ya: Solid Queue untuk queueing, Solid Cache untuk caching, dan Solid Cable untuk websocket.

Solid Trifecta versi 1 secara resmi dirilis di Rails World 2024, berbarengan dengan dirilisnya Rails 8. Saya sebenarnya udah coba dari 0.x, tapi karena belum stable, ada bug yang cukup mengganggu.

Ketika coba lagi versi 1, ternyata ada major changes. Di versi awal, tabel-tabel di Solid Cache, Solid Queue, dan Solid Cable masih digabung di database utama. Di versi 1 ini, masing-masing komponen punya database-nya sendiri-sendiri.

## Apa keuntungannya?

Ada beberapa keuntungan dari menggunakan database sebagai backend untuk queue, cache, dan websocket.

1. Menyederhanakan dependensi dan infrastruktur. Menggunakan database sebagsi backend berarti kita udah nggak memerlukan in-memory database macam Redis. Cuma satu dependensi aja: database.
2. Menyimpan cache lebih banyak dan lama. Memory itu mahal, sedangkan storage itu murah. Dengan harga yang sama, kita bisa mendapatkan storage yang lebih banyak ketimbang memory. Ini berarti, kita bisa memanfaatkannya untuk menyimpan cache lebih banyak dan lama. Cache juga nggak akan hilang kalau server di-restart.
3. Lebih mudah debugging dan observe. Karena job disimpan di database, kita bisa query seperti query data pada umumnya.

Di Rails 8, Solid Trifecta ini jadi default adapter. Dan seperti biasa, kalau dirasa kurang cocok dengan kebutuhan kita, kita masih bisa menggantinya dengan yang lain.

Udah coba Solid Trifecta? Gimana menurutmu?