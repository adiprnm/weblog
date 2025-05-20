---
layout: default
title: Garap lagi Kanyaah
tags: tech programming side-hustle
---

Mari kita recap dulu pencapaian beberapa aplikasi yang udah saya buat.

## Wang

Sejauh ini, ada beberapa orang yang bikin akun di Wang. Tapi, belum ada yang melanjutkan ke paket langganan manapun, kecuali saya dan istri saya sendiri, hehe.

Asumsi saya, ini mungkin karena orang-orang masih belum terlalu butuh aplikasi financial tracker. Atau, beberapa udah punya aplikasi andalan mereka, dan penasaran apa bedanya Wang dengan aplikasi andalan mereka.

Yah, who knows. Yang jelas, Wang sampai saat ini belum menghasilkan pundi-pundi rupiah

## UlinBasa

Udah ada 3 orang yang daftar, dua di antaranya saya nggak tau siapa, tapi satunya lagi itu teman saya yang saya tawari produknya, hehe.

Sejujurnya saya belum maksimal promosiin aplikasinya, cukup bingung juga promosinya harus di mana, karena konten Threads saya isinya kebanyakan soal programming dan proses bikin aplikasi.

Tapi, in case pembaca di sini penasaran, websitenya masih bisa diakses di [https://ulinbasa.bikinajadulu.web.id](https://ulinbasa.bikinajadulu.web.id){:target="_blank"}.

## Kanyaah

Meskipun sangat jarang promosi, ada aja user yang mendaftar dan coba bikin undangan. Tapi, seperti Wang, hanya sedikit yang melanjutkan bayar untuk mengaktifkan undangan.

Asumsi terbesar saya ada beberapa kemungkinan:
1. Copywriting di landing page kurang menggugah.
2. Pilihan templatenya yang masih sedikit. Per saya nulis ini, baru ada 10 template yang siap digunakan.
3. Calon user kebanyakan nyari undangan yang elegan dan banyak animasinya.
4. Beberapa orang masih gaptek. Ada beberapa yang bingung isi datanya gimana, meskipun udah saya kembangkan proses pembuatannya supaya bisa step by step. Bahkan sempat ada juga yang bingung cara bayar undangannya gimana.
5. Beberapa fitur masih terasa membingungkan. Cukup sering saya menerima pertanyaan tentang bagaimana caranya membagikan undangan. Padahal, udah saya buatkan fiturnya. Cukup sesuaikan template pesan, isi nama tamu undangan, terus klik sebarkan. Selain itu, pernah ada juga user yang kebingungan ketika mau ganti foto sampul undangan, karena untuk mengatur foto sampul, user harus upload dulu ke galeri. Yang mana, ini bertentangan dengan fitur customizable nya Kanyaah, di mana user bisa mengaktifkan/nonaktifkan fitur yang nggak dibutuhkan, termasuk galeri.

Berdasarkan asumsi-asumsi ini, saya mulai memperbaiki copywriting di landing page, meningkatkan performa landing page, dan meningkatkan proses pengaturan foto sampul dan latar belakang undangan.

## Dimulai dari yang less effort dulu: copywriting

Copywriting di landing page sebenarnya udah pernah diperbaiki. Tapi somehow, saya merasa masih ada yang kurang.

Seperti biasa, saya minta ChatGPT untuk dibuatkan copywriting supaya lebih magnetic alias menarik user untuk bikin undangan.

Tapi ya mengandalkan 100% ke ChatGPT rasanya nggak betul. Karena copywriting ini sangat menyakut terhadap perasaan pembaca, jadi sebisa mungkin saya buat senatural mungkin tanpa mengurangi unique selling point dari Kanyaah: proses pembuatan yang instan dan fitur yang fleksibel.

Akhirnya saya coba breakdown masalah umum yang cukup sering dihadapi calon mempelai:
1. Proses bikin undangan yang cukup lama, bisa berjam-jam bahkan berhari-hari.
2. Harga undangan tetap sama meskipun hanya menggunakan fitur dasar aja.

Poin satu saya putuskan buat jadi headline di landing page, sehingga dari yang headline-nya tadinya monoton begini:

> ### Buat Undangan Digital Elegan dalam 10 Menit – Mudah dan Cepat!
>
> Gak perlu ribet: cukup pilih desain yang kamu suka, isi informasi acara, dan undangan digitalmu langsung jadi. Praktis, hemat, dan tetap berkesan.

jadi begini:

> ### Bikin undangan online harus nunggu berhari-hari? Serius?
>
> Di Kanyaah, **cuma butuh 10 menit**, undangan online **langsung jadi dan siap disebar.**
>
> Lebih dari **60 mempelai** udah membuktikannya. Sekarang giliran kamu!

Saya ngerasa cocok banget dengan copywriting baru ini.

Baris pertama meng-highlight salah satu problem dalam proses pembuatan undangan digital, yaitu proses pembuatan undangan yang lama.

Baris kedua menjelaskan bagaimana problem tersebut nggak berlaku di Kanyaah.

Baris ketika bisa menjadi penguat untuk poin pertama dan kedua, dan menjadi kalimat persuasif untuk membuat undangan.

## Lanjut ke hal teknis: performance landing page

Awal saya bikin landing page, saya bikin seadanya aja. Nggak terlalu mikirin performanya gimana. Makanya saya pasang animasi zoom in di setiap elemen, haha.

Padahal, landing page ini seharusnya jadi perhatian banget sih, karena sangat menentukan apakah potential user akan memutuskan untuk bikin undangan atau nggak.

Makanya, kemarin-kemarin saya fokus untuk improve dari sisi user experience dan performa landing page. Dari sisi user experience:

✅ Animasi-animasi nggak penting saya hapus<br>
✅ Font family saya ganti dari Ubuntu ke Plus Jakarta Sans supaya tifografi-nya lebih menarik dan mudah dibaca.

Dari sisi performance, saya mengimplementasikan sebanyak mungkin saran yang bisa saya implementasikan, seperti penambahan atribut `alt` di setiap gambar yang ada, menambahkan meta description, dan sebagainya.

Hasilnya? Skor Accessibility, Best Practice, dan SEO udah hijau semua di web dan mobile. Yang bermasah cuma satu: skor Performance.

## Bertanya di Threads

Salah satu issue yang kurang saya pahami adalah issue Largest Contentful Paint atau lebih dikenal sebagai LCP. Karena tanya ChatGPT masih belum ngerti juga, saya akhirnya tanya ke komunitas di Threads, sambil sekalian sharing progress optimisasi performance landing page.

![Skor performance masih 69](/assets/images/2025/7148c822-33a4-4610-ae03-07484dbdb691.png)
*Skor performance masih 69*

Sejujurnya saya nggak terlalu berharap ada yang reply. Kalau ada ya alhamdulillah, kalau nggak ya seadanya aja.

Beruntungnya, ada saran dari [mas Nudin](https://www.threads.com/@mnudinlubis/post/DJyqpR4h0wH){:target="_blank"} untuk preload font yang digunakan di landing page.

Setelah saya mencobanya, ternyata berhasil! Performanya naik jadi 79 🎉

![Skor performance naik jadi 79](/assets/images/2025/c7306b77-e636-4e9f-8202-fee79a4d3514.png)
*Skor performance naik jadi 79*

Tapi rasanya nanggung banget. Harusnya masih bisa ditingkatkan lagi.

Nggak disangka, mas Nudin [ngasih saran lagi](https://www.threads.com/@mnudinlubis/post/DJzN336hHLw){:target="_blank"} untuk kasih max width tagline di mobile dengan 16 karakter.

Ternyata, skornya naik lagi jadi 86! 🎉

![Skor performance naik lagi jadi 86](/assets/images/2025/913c7db0-b1e4-462e-9f25-3e1ba77cb65b.png)
*Skor performance naik jadi 86*

Sisanya menurut beliau tinggal handle ukuran JavaScript. Setelah dipikir-pikir, di landing page ini nggak ada bagian yang perlu JavaScript. Jadi, mending nggak load JavaScript sama sekali.

Hasilnya, yah, cuma nambah 1 doang sih, tapi lumayan lah.

![Skor performance final jadi 87](/assets/images/2025/2ece0534-789e-4d4a-ab80-db4a234db268.png)
*Skor performance final jadi 87*

Di sini saya udah merasa cukup dan bisa lanjut ngerjain yang lain. Biarlah nanti kalau ada waktu senggang, saya coba improve lagi sampai hijau.

## Atur foto sampul dan latar belakang lebih mudah

Selanjutnya, saya enhance flow atur sampul foto undangan dan latar belakang.

Sekarang, di halaman undangan, tepatnya di bagian Pengaturan, ada section baru, yaitu **Foto sampul dan latar belakang**. Jika ada foto yang belum di-set, maka akan menampilkan icon tanda seru berwarna kuning.

![Atur sampul dan latar belakang](/assets/images/2025/294bd95c-1223-484c-8ec8-a757fef99e2f.png)
*Atur sampul dan latar belakang*

Ketika klik Atur Foto, maka akan diarahkan ke halaman khusus untuk atur foto:
- latar belakang
- sampul popup
- sampul depan
- sampul belakang
- sampul countdown
- sampul livestream, dan
- sampul ucapan.

![Halaman atur foto](/assets/images/2025/af4c00b6-e367-4da0-bc7e-41304b0db967.png)
*Halaman atur foto*

## Apa lagi?

Sebagaimana asumsi saya di nomor 2, untuk beberapa waktu ke depan, saya akan fokus memperbanyak pilihan template yang bisa digunakan. Ada satu referensi desain yang cukup menarik dan ingin saya buatkan template serupa.

Progressnya akan saya usahakan update [di akun Threads saya](https://www.threads.com/@by.adipurnm){:target="_blank"} dan di blog ini.

Semoga lancar dan nggak mangkrak lagi 💪
