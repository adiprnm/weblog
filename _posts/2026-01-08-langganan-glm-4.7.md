---
layout: default
title: Langganan GLM 4.7
tags: Programming
---

Dua hari yang lalu, setelah menimbang-nimbang, saya akhirnya memutuskan untuk berlangganan Coding Plan GLM 4.7-nya Z.ai.

Sebagai tim mendang-mending, saya rasa tahun 2026 adalah waktu yang tepat untuk berlangganan tool AI untuk meningkatkan produktivitas dengan mengerapkan workflow agentic coding. Saya yakin, tahun 2026 ini, baik LLM maupun workflow agentic coding sekarang sudah semakin robust.

Gemini dan Claude adalah dua model yang cukup oke untuk agentic coding. Tapi, harganya langganan bulanannya bagi saya lumayan mahal jika dibandingkan dengan kemungkinan pemakaiannya kelak. Use case saya: saya pakai workflow agentic coding untuk bantu-bantu di side project.

Sampai akhirnya nemu GLM 4.7. Ada beberapa poin yang membuat saya cukup yakin untuk berlangganan:

1. Hasil benchmarknya cukup bagus, mendekati Claude Opus 4.5---model yang so far sangat memuaskan untuk menyelesaikan task yang cukup kompleks.
2. 3x usage of the Claude Pro plan. Saya cukup sering mendapati keluhan pengguna Claude Pro plan cepat kena limit. 3x usage of Claude Pro plan sangat lebih dari cukup.
3. Harga yang terjangkau. Saya ambil paket yang Lite, quarterly. Harga normal $18. Kemarin lumayan dapat diskon gede: 55% + 10% dari referral-nya [mas Yoga](https://yogasukma.web.id). Jadi saya cuma bayar sekitar $7 atau sekitar Rp120.000 untuk 3 bulan.

Kenapa nggak ambil yang yearly? Karena budget saya pas-pasan, hehe. Rasanya langganan $18 per 3 bulan bagi saya nggak terlalu berat ketimbang langsung bayar $72 setahun.

## Tugas pertama: bikin tes untuk repo toko online

Toko online saya awalnya buat keperluan pribadi, makanya saya belum tambahkan unit testing karena memang masih sederhana. Tapi, sejak saya open source-kan, dan seiring project-nya semakin besar kelak, tes itu wajib ada.

Saya minta GLM 4.7 untuk buatkan test berdasarkan routes yang ada. Urutan prioritasnya, bikin test yang penting dulu, lalu test-test yang non-prioritas.

Percobaan pertama, tes berhasil ke-generate, tapi masih pada gagal. Minta benerin tes yang gagal, tapi:

* konteks semakin gede
* tes tetap error
* kena limit per lima jam

Di sini saya sadar, ada suatu hal yang kurang. Model ini perlu semacam kontrak atau kesepakatan tentang bagaimana dia memproses prompt saya, supaya nggak melebar kemana-mana.

Di sinilah saya paham tujuan dari file `AGENTS.md`, hehe. Saya minta ChatGPT buatkan prompt untuk generate file `AGENTS.md`. Lalu, prompt tersebut saya kasih ke GLM 4.7. Tambahkan juga file `.opencode/config.yml` yang isinya untuk set `AGENTS.md` sebagai policy/kebijakan yang harus dipatuhi model setiap kali saya memberikan prompt.

Saya tes sedikit untuk memastikan bahwa setiap kali saya buka OpenCode, GLM 4.7 akan selalu mengacu ke `AGENTS.md`. Setelah yakin, saya minta GLM 4.7 untuk membuat supaya semua tes passed semua.

Setelah implementasi, hasilnya sangat memuaskan:

* Test passed semua
* Konteks nggak melebar kemana-mana, bahkan cuma pakai sekitar 50-60%.

Yah, meskipun ada beberapa perubahan yang nggak perlu, tapi tergolong sedikit dan masih bisa diedit manual. So far so good. Sangat okelah buat bantu-bantu saya di project sampingan.

Masih banyak yang perlu saya pelajari di era agentic coding workflow sekarang ini. Tentunya dengan tetap update seputar tren terbaru: MCP, skills, dsb. Nanti kalau udah ada needs-nya, kita pelajari lebih dalam lagi. Jadi, ya pelajari sesuai kebutuhan aja.

Oiya, kalau kamu tertarik untuk subscribe GLM 4.7 juga, bisa pakai link ini ya: [https://z.ai/subscribe?ic=48RUBAPTYS](https://z.ai/subscribe?ic=48RUBAPTYS). Lumayan dapat potongan 10%, hehe.
