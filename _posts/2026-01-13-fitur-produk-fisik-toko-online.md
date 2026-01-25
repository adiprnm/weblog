---
layout: default
title: Fitur produk fisik di toko online saya dirilis
tags: Programming SideHustle
---

Nggak kerasa, udah beberapa hari ini ternyata nggak nulis di blog. Keasyikan pecat-pecut AI, haha.

Sejak tugas bikin unit test di [project toko online](https://github.com/adiprnm/shop-rails){: target="_blank" } yang saya kasih ke GLM 4.7 selesai, saya langsung mengerjakan fitur selanjutnya, yaitu fitur produk fisik.

Saya rasa develop fitur ini sangat cocok dilakukan oleh AI, karena fiturnya cukup kompleks. Harus ada varian, handling di halaman keranjang, integrasi dengan penyedia layanan shipping, dan perintilan-perintilan lainnya.

Kalau dikembangin sendiri bisa-bisa aja sebenarnya, tapi akan menyita banyak sekali waktu. Saya udah cukup cape ngoding di kerjaan. Justru inilah alasan saya subscribe AI. Bukan semata keren-kerenan atau ikut hype, tapi saya ingin membeli waktu.

Anak saya belakangan ini senang sekali mengajak saya main. Jadi, saya harus adopsi workflow baru. AI yang ngoding, saya yang kasih perintah sambil main sama anak.

Pengembangan fitur ini juga momen yang pas untuk coba workflow agentic coding yang saya bangun berdasarkan informasi yang saya peroleh. Sederhana aja sebenarnya:

1. Saya tuliskan dulu requirements nya seperti apa. Saya simpan di sebuah file markdown di folder `prompts`
2. Minta ChatGPT untuk perbaiki requirements saya supaya dokumentasinya lebih well-written dan rinci
3. Minta GLM 4.7 buat implementation plan berdasarkan requirements
4. Saya review implementation plannya. Kalau ada yang kurang atau implementasinya keliru, saya minta AI untukr revisi
5. Setelah OK, saya minta AI buatkan epics dan tasks di beads berdasarkan implementation plan yang sudah disetujui
6. Minta AI untuk eksekusi berdasarkan beads yang ready

Dengan begini, saya jadi jauh lebih sedikit ngoding. 98% fitur produk fisik ini dikembangkan oleh AI. Saya cuma revisi sedikit: benerin Stimulus controller yang letaknya keliru, style yang nggak sesuai, pokoknya pekerjaan-pekerjaan remeh aja. Yang berat-berat saya kasih ke AI.

Meskipun sebagian besar pekerjaan dikerjakan oleh AI, pastikan untuk selalu me-review hasil kerja AI. Kalau asal approve, bisa jadi kerjaan AI ini nggak aman.

Sebagai contoh, saat integrasi dengan layanan pengiriman, saat membuat pesanan, AI mengirim parameter `shipping_cost` mentah-mentah. Yang artinya, user yang tau celahnya bisa saja set shipping cost ini jadi 0, atau bahkan minus! Di sinilah pentingnya kita paham basic web security.

Tentu saja, saya minta AI revisi, sampai akhirnya sesuai harapan saya.

Setelah prompting selama 4 hari, akhirnya fitur produk fisik ini pun selesai dan sudah merged ke branch `main`. Langsung saja, saya update versi toko online dan input makaroni di toko online supaya bisa segera dijual.

Kalau kamu butuh cemilan buat chill sambil nontonin AI ngoding, atau buat cemilan keluarga, yuk pesan [Makaroni Original dan Pedas Asin](https://shop.adipurnm.com/products/makaroni-original-dan-pedas-daun-jeruk-100g){: target="_blank" } di toko online saya!
