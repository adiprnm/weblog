---
layout: default
title: Penyebab Coretax sering error dan lambat
---

Beberapa waktu yang lalu, tepatnya 1 Januari 2025, DJP merilis aplikasi Coretax. Harapannya, aplikasi ini mampu mempermudah proses administrasi perpajakan. Namun, aplikasi ini justru banyak menuai kritikan dari masyarakat karena dinilai belum siap dirilis dan rilisnya terkesan dipaksakan.

Asumsi ini muncul karena masyarakat banyak mengeluhkan bahwa aplikasi ini lambat dan banyak errornya. Untuk sekelas aplikasi tingkat negara, harusnya ini tidak boleh terjadi, apalagi di sektor yang cukup krusial.

Ngomong-ngomong soal error, ketika scroll TikTok, ada salah satu video yang lewat di halaman FYP saya. Di beberapa bagian dari video tersebut, pembuat video merekam error pada aplikasi Coretax. Berikut errornya:

![Coretax error](/assets/images/2025/01/coretax.jpeg)

Dari gambar di atas, kita bisa dapat beberapa informasi:

# Penyebab errornya adalah kehabisan koneksi database

Dari error message yang ditampilkan, bisa dilihat bahwa sistem mencoba untuk mendapatkan koneksi ke database, tapi tidak bisa karena koneksi ke database di connection pool sudah terpakai semua. Dampaknya, loading di aplikasi akan sangat lama. Syukur-syukur kalau kebagian koneksi database, loadingnya akan selesai. Kalau nggak kebagian koneksi sama sekali, udah nunggu lama, error pula. Ini yang dikeluhkan oleh masyarakat.

# Infrastruktur Coretax belum siap handle traffic besar

Kehabisan koneksi ini menandakan bahwa infrastuktur Coretax belum siap handle traffic yang besar. Entah bagaimana mekanisme stress test dan load test yang dilakukan oleh vendor, yang jelas hal seperti ini harusnya bisa diantisipasi ketika dua tes tersebut dilakukan dengan benar, dengan mempertimbangkan worst-case scenario yang akan terjadi.

Tim GovTech pernah sharing dengan sangat detail bagaimana mereka melakukan performance test untuk Asesmen Nasional [di sini](https://medium.com/govtech-edu/lessons-learned-from-asesmen-nasional-serving-80k-rps-efficiently-on-the-cloud-71bc3e3911c6) untuk mengantisipasi traffic yang sangat tinggi. Terbukti, dengan test yang telah mereka lakukan, proses Asesmen Nasional berjalan lancar tanpa ada kendala lag yang berarti.

# Tidak ada indikasi error di kode aplikasi

Error di atas hanya menunjukkan error tidak dapat terkoneksi ke database. Tidak ada indikasi error yang disebabkan karena adanya kesalahan kode di dalam aplikasi.

# Backend-nya menggunakan bahasa C#

Ini sudah sangat jelas dengan file ekstensi `.cs` pada gambar di atas. Kemungkinan besar pakai framework .NET.

***

Ada beberapa hal yang bisa dilakukan untuk mencegah dan mengatasi issue di atas.

# Buat database replica dan implementasi CQRS

Command Query Responsibility Segregation (CQRS) adalah sebuah mekanisme yang memisahkan operasi read dan write ke database ke dalam dua model yang berbeda. Dengan begini, proses write tidak akan terganggu oleh proses read yang sedang berlangsung dan sebaliknya.

Proses read bisa dilakukan ke database replica. Jumlah replica yang diperlukan bisa ditentukan berdasarkan data hasil performance test. Dengan begini, issue tidak bisa connect ke database karena kehabisan koneksi bisa terselesaikan.

# Implementasi canary deployment

Mengacu kepada artikel yang ditulis oleh tim GovTech yang saya maksud di atas, canary deployment perlu dilakukan sebelum aplikasi di-rollout ke semua pengguna. Instrumentasi terhadap aplikasi juga sangat penting, supaya kinerja aplikasi dapat dipantau, seperti memory usage, latency, throughput, dsb.

Jika semua aspek sudah memenuhi kriteria, aplikasi bisa di-rolout ke semua pengguna.

# Lakukan performance testing secara intensif

Performance testing perlu dilakukan untuk memastikan seberapa tangguh aplikasi yang akan dirilis nanti. Dari hasil performance testing, kita bisa tahu seberapa besar traffic yang bisa dihandle oleh server dan berapa banyak penggunaan resource server. Berdasarkan data ini, kita bisa memutuskan kebutuhan server untuk di production nantinya.

***

Saya tidak tahu bagaimana persisnya implementasi yang dilakukan oleh vendor. Saya hanya menilai berdasarkan gambar yang saya peroleh dan apa yang saya ketahui sejauh ini. tidak kurang, tidak lebih.

# Kenapa saya menulis ini?

Rasanya menarik aja memperhatikan setiap kali instansi pemerintah merilis suatu aplikasi. Keluhan utamanya selalu saja ada pada performa aplikasi yang lambat. Padahal, dana yang dikeluarkan selalu miliaran bahkan triliunan, tapi seringkali aplikasi yang dibuat kualitasnya sangat jauh dibandingkan dengan harga yang dibayar.

Apalagi, pengembangan aplikasi Coretax ini menghabiskan dana hingga 1,2 triliun; sebuah nominal yang sangat besar. Uang sebanyak ini ya pastinya dari pajak kita semua. Sangat disayangkan bahwa kejadian yang bisa diantisipasi seperti ini harus terjadi lagi dan lagi.

Besar harapan saya, peristiwa seperti ini tidak akan terjadi lagi di waktu yang akan datang. Semoga apa yang terjadi pada Coretax menjadi pembelajaran bagi semua pihak.
