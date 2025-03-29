---
layout: default
title: Solusi blogging di GitHub dari HP
---

Sejak menemukan aplikasi Markor (makasih banyak rekomendasinya ChatGPT), install MGit, dan rilis mini project [ToWebP](https://towebp.adipurnm.my.id), saya jadi menemukan solusi untuk workflow blogging di GitHub saya dari HP.

Jadi, saat ini ada dua blog saya yang diakses. Satu saya host sendiri di VPS, satu lagi saya host di GitHub.

Sejujurnya, untuk blogging, saya lebih suka mempublikasikannya di GitHub karena alasan longevity. Domain _adipurnm.my.id_ pun setidaknya akan tetap aktif sampai 2033 nanti.

Saya beberapa kali bilang di beberapa tulisan bahwa masalah terbesar terbesar blogging di GitHub adalah kekurangpraktisannya untuk nge-blog di HP. Apalagi, kalau saya mau tambah foto di tulisan saya. Sangat tidak praktis dilakukan di GitHub Mobile.

Dengan 3 tools di atas, publish tulisan di GitHub sekarang jadi lebih praktis.

# Konversi dan kompresi gambar dengan ToWebP

Foto dari kamera ukurannya biasanya cukup besar untuk dimuat di tulisan blog. Sehingga, gambar ini perlu dikonversi dan dikompresi sehingga ukurannya jadi lebih optimal.

Untungnya, project weekend kecil-kecilan saya: [ToWebP](https://towebp.adipurnm.my.id), kemarin-kemarin saya rilis, jadi bisa saya pakai sendiri, hehe.

# Buat tulisan di QuickNote

Salah satu fitur Markor adalah QuickNote. Seperti namanya, halaman ini tujuannya untuk mencatat apapun secara cepat, termasuk ide tulisan, atau bahkan jadi satu tulisan utuh.

QuickNote ini juga mendukung markdown, sehingga tulisan yang dibuat bisa langsung dilihat pratinjaunya. Termasuk, bisa menyematkan gambar ke dalam tulisan. Kita juga bisa menentukan di folder mana gambar yang disematkan akan disimpan. Ini yang menjadi poin utama dan problem solver-nya.

# Publish tulisan dengan MGit

Setiap kali perubahan terjadi, website akan diperbarui via GitHub Action. Termasuk tulisan baru. Perubahan yang dilakukan di HP bisa di-push ke GitHub via MGit ini.

Secara tampilan, MGit ini tampilannya biasa aja. Tapi siapa peduli. Yang penting, changes saya bisa di-push dari HP.

***

Workflow ini akan terkesan ribet bagi orang yang nggak familiar sama Git workflow. Hanya untuk publish tulisan saja, harus install banyak aplikasi.

Tapi bagi saya, flow segini sudah cukup sederhana. Harusnya ini masih bisa disederhanakan jadi sebuah aplikasi. Mungkin web apps supaya nggak ribet install aplikasi. Sepertinya akan jadi weekend project saya yang selanjutnya, haha.

Mari kita lihat beberapa waktu ke depan.