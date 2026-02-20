---
layout: default
title: Kamu sebenarnya punya tools productivity gratis bernama todo.txt
tags: Tech Productivity
toc: true
---

Beberapa orang rela membayar biaya langganan hanya untuk aplikasi sederhana seperti to-do list. Padahal, aplikasi to-do list intinya ya begitu-begitu aja. Tambah todo, kasih beberapa atribute seperti label, dsb. Lalu atur prioritas mana yang harus diselesaikan terlebih dahulu atau masih bisa dilakukan di lain waktu. Setelah selesai, tandai to-do tersebut sebagai selesai.

Memang, ada beberapa aspek tertentu yang menyebabkan orang-orang rela membayar, seperti fitur yang orang-orang tersebut perlukan hanya ada di layanan tersebut. atau mungkin hanya sebatas alasan estetika aplikasi.

## Mengenal format todo.txt

Mencatat dan mengatur prioritas pekerjaan itu pada dasarnya bisa dilakukan di dalam sebuah file plain text biasa bernama `todo.txt`. Tanpa ketergantungan terhadap layanan pihak ketiga. Data 100% milik kamu.

Kalau kamu hanya memerlukan fitur dasar dan tidak terlalu masalah dengan tampilan yang sederhana, mekanisme ini sangat cocok buat kamu.

File `todo.txt` ini juga punya format khusus lho. Format ini nantinya akan sangat mempermudah untuk mengatur urutan atau prioritas todo.

Todo yang masih ongoing biasanya formatnya begini:

```todotxt
priority created-at todo-name @konteks +project due:due-date
```

Todo yang sudah selesai biasanya formatnya begini:

```todotxt
x created-at done-at todo-name @konteks +project due:due-date pri:priority
```

Mari saya jelaskan sedikit:

* `priority/pri`: skala prioritas todo, dimulai dari `(A)` (paling urgent) sampai `(Z)` (sangat tidak urgent)
* `created-at`: tanggal todo dibuat
* `todo-name`: nama todo
* `@konteks`: situasi, lokasi, alat, atau orang yang harus ada untuk menyelesaikan todo
* `+project`: mengelompokkan todo ke dalam sebuah target atau project, membantu untuk melacak progress terhadap outcome spesifik
* `due`: tanggal tenggat waktu todo harus selesai dilaksanakan

Sebagai contoh: hari senin saya harus service motor di dealer. Jika diubah ke dalam format `todo.txt`, kurang lebih akan jadi begini:

```todotxt
(A) 2026-02-18 service motor @dealer +maintenance due:2026-02-19
```

Pada dasarnya, sebenarnya kita cukup ketik "Service motor di dealer" di file `todo.txt`, dan sah-sah saja. Tapi, dengan memakai format di atas, meskipun memang lebih ribet, todo jadi bisa dapat diurutkan atau difilter berdasarkan atribut-atribut tertentu. Atribut-atribut tersebut yaitu prioritas, project, konteks, tanggal dibuat, tenggat waktu, atau deskripsi.

Ini sangat bermanfaat untuk menentukan todo mana saja yang harus dikerjakan berdasarkan skala prioritas saat itu juga. Misal, ternyata project freelance lebih prioritas, maka kita bisa urutkan atau filter todo berdasarkan project freelance.

## `todo.sh`: antarmuka CLI untuk `todo.txt`

Kalau kamu pengguna Linux atau Mac, `todo.sh` bisa kamu gunakan untuk mengatur file `todo.txt` kamu. Unduh versi terbaru [di sini](https://github.com/todotxt/todo.txt-cli/releases). Pilih file yang ekstensi-nya `.zip` atau `.tar.gz`.

Ada 3 file penting di dalam file `.zip` atau `.tar.gz` todo txt CLI.

* `todo.cfg`: file config yang akan dibaca oleh `todo.sh`
* `todo.sh`: antarmuka CLI
* `todo_completion`: autocomplete perintah-perintah yang tersedia di `todo.sh`

Supaya bisa digunakan di terminal, ketiga file tersebut harus disimpan di folder yang semestinya:

* `todo.cfg` disimpan di `~/.config/todo` dengan nama `config`
* `todo.sh` disimpan di `~/.local/bin`
* `todo_completion` disimpan di `~/.local/share/bash-completion/completions`

Supaya nggak repot ketik `todo.sh` setiap kali mau melakukan manipulasi terhadap todo, tambahkan `alias t="todo.sh"` di file `~/.bashrc` atau di file RC shell favorit kamu dan jalankan `source ~/.bashrc` di terminal untuk memuat ulang konfigurasi shell. Ketik `t` di terminal, kalau menampilkan usage, berarti `todo.sh` sudah berhasil diinstall.

File todo secara default akan disimpan di `HOME`. Kalau kamu ingin menempatkannya di folder lain, kamu bisa mengubahnya di `~/.config/todo/config`. Kamu juga bisa uncomment baris-baris yang berkaitan dengan text color supaya list todo di terminal jadi berwarna.

## Perintah-perintah dasar `todo.sh`

Berikut beberapa perintah dasar yang menurut saya sangat sering dipakai:

* `t add "New todo"`: menambahkan todo baru
* `t replace ID "Updated todo"`: untuk mengubah todo yang ada
* `t append ID "appended text"`: menambahkan text ke todo yang sudah ada, cocok kalau kita lupa set context/project/hal-hal lainnya
* `t pri ID NEW_PRI`: menambahkan atau mengubah prioritas todo, misal dari A ke B
* `t depri ID`: menghapus prioritas todo
* `t do ID`: menandai todo sebagai done dan memindahkannya ke file `done.txt`
* `t del ID`: menghapus todo
* `t ls`: menampilkan list pada file `todo.txt`
* `t lsp`: menampilkan list todo yang prioritas pada file `todo.txt`

Daftar lengkapnya bisa dicek menggunakan perintah `t help`.

## Menampilkan todo sesuai prioritas pekerjaan

Tentunya tidak selalu prioritas A sampai Z itu mutlak. Kadang, kita ingin fokus mengerjakan pekerjaan kantor terlebih dahulu. Atau, kita ingin mengerjakan pekerjaan sampingan karena kebetulan sedang memiliki waktu senggang.

Misal, kita punya todo sebagai berikut:

```
(A) Perbaiki bug fitur 1 @work
(A) Perbaiki bug fitur 2 @work
(B) Buat implementation plan untuk fitur baru @work
Review kode yang sudah bisa di-review @work
(A) Tambah fitur subscription @freelance
Perbaiki bug fitur 1 @freelance
```

Jika kita ingin menampilkan todo yang berkaitan dengan pekerjaan kantor, gunakan perintah `t ls work`. Hasilnya sebagai berikut:

```
(A) Perbaiki bug fitur 1 @work
(A) Perbaiki bug fitur 2 @work
(B) Buat implementation plan untuk fitur baru @work
Review kode yang sudah bisa di-review @work
```

Jika ingin menampilkan todo yang prioritas saja, gunakan perintah `t lsp work`. Hasilnya sebagai berikut:

```
(A) Perbaiki bug fitur 1 @work
(A) Perbaiki bug fitur 2 @work
(B) Buat implementation plan untuk fitur baru @work
```

Jika ingin menampilkan pekerjaan prioritas di kantor, gunakan perintah `t lsp a work`. Hasilnya sebagai berikut:

```
(A) Perbaiki bug fitur 1 @work
(A) Perbaiki bug fitur 2 @work
```

Hal yang sama juga bisa diimplementasikan ke konteks/project lainnya. Dengan ini, mengatur prioritas pekerjaan jadi lebih mudah, cepat, dan yang paling penting: gratis. *No bloated software*. *Just plaintext productivity*.

## `neotodotxt.nvim`: atur `todo.txt` di NeoVim

Ini adalah plugin buatan saya sendiri. Kalau kamu NeoVim user, dan prefer mengatur `todo.txt` di NeoVim ketimbang CLI, plugin ini mungkin cocok buat kamu.

Tentu saja, karena `todo.txt` ini cuma file biasa, kamu tetap bisa menggunakan vim keybinding untuk melakukan manipulasi terhadap `todo.txt` kamu dengan bebas, entah itu memindahkana atau menghapus todo.

Untuk pengalaman terbaik, saya sarankan install plugin Treesitter dan nyalakan syntax hightlight untuk file `todo.txt` dengan cara menambahkan `todotxt` ke dalam `ensure_installed`.

Tambahkan kode berikut di `init.lua` supaya syntax highlight langsung berfungsi ketika membuka file `todo.txt` dan `done.txt`.

```lua
vim.api.nvim_create_autocmd({"BufRead", "BufNewFile"}, {
  pattern = { "todo.txt", "done.txt" },
  callback = function()
    vim.cmd([[
      set filetype=todotxt
      set wrap
      set linebreak
    ]])
  end,
})
```

Pluginnya bisa diakses [di sini](https://github.com/adiprnm/neotodotxt.nvim).

## Markor: todo.txt di smartphone

Markor adalah salah satu aplikasi note-taking yang gratis dan open source. Selain note-taking app, Markor juga mendukung format `todo.txt`. Saya pernah membahas seputar markor di tulisan [Plaintext productivity](/plaintext-productivity).

Untuk masalah filtering, Markor ini memang belum se-advance `todo.sh`. Tapi, saya rasa sangat cukup karena kita masih bisa melakukan pengurutan berdasarkan prioritas, project, konteks, tanggal dibuat, tenggat waktu, deskripsi, dan baris teks.

Enaknyaa lagi, di Markor sudah tersedia toolbar yang sangat memudahkan untuk melakukan manipulasi terhadap `todo.txt`, seperti memindahkan satu baris ke atas/bawah, menyisipkan project/konteks/tenggat waktu, menyelesaikan dan mengarsipkan todo yang sudah selesai, dan operasi-operasi lainnya. Urutan toolbar-nya pun bisa dikonfigurasi di **Lainnya > Preferensi > todo.txt > Perintah tindakan**

Sayangnya, sekarang aplikasi tersebut sudah tidak ada di Play Store. Tapi tenang, aplikasi tersebut masih bisa diunduh di [F-Droid](https://f-droid.org/id/packages/net.gsantner.markor/){: target="_blank" }.


## Sinkronisasi antarperangkat dengan Git

Karena data 100% milik kita, kalau mau, kita bisa melakukan sinkronisasi `todo.txt` antarperangkat menggunakan Git dan GitHub. Prinsip dasarnya sama persis dengan tulisan yang pernah saya buat tentang [Multi-device password management dengan Password Store](/multi-device-password-management-dengan-password-store).

## Penutup

Itulah sedikit tentang `todo.txt`. Sekarang saya sudah beralih menggunakan `todo.txt` untuk mencatat semua hal yang harus/ingin saya kerjakan. Sejauh ini sangat membantu untuk menentukan prioritas pekerjaan kantor dan pekerjaan-pekerjaan lainnya.

Kamu tertarik? Silakan dicoba. Seru kok, hehe.
