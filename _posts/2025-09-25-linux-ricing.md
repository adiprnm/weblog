---
layout: default
title: Meracik tampilan Linux dengan i3, picom, polybar, dan rofi
tags: Linux
---

DHH belakangan ini cukup getol sharing seputar Omarchy. Omakase Arch + Hyprland. Berawal dari bash script sederhana, sekarang udah jadi distro Linux sendiri.

Tiling window manager ini cukup menarik bagi saya yang udah terlena di zona nyaman dengan DE MATE. Simple dan minimalis. Semua kerjaan kelar dengan setup ini.

Tapi, saya bosan. Saya ingin coba hal baru, ngulik banyak hal seperti zaman kuliah dulu.

Tapi, clean install Ubuntu MATE tentu bukan pilihan yang bijak. Saya harus backup dulu data-data yang ada di Ubuntu MATE sebelum clean install. Padahal, Baik Arch maupun Ubuntu pada dasarnya sama-sama Linux. Nggak ada keuntungan spesifik kenapa saya harus mengorbankan Ubuntu MATE hanya untuk install Arch, selain bisa bilang "I use Arch, btw".

Akhirnya, saya cari cara lain. Pertanyaan yang muncul: ada nggak ya, tiling window manager yang serupa dengan Hyprland, tapi untuk X11?

Ternyata ada! Dan cukup banyak juga: awesomewm, bspwm, dwm, i3, dan program-program lainnya. Jadi, saya pilih salah satu saja: i3.

Untungnya, untuk install i3wm (dan kemungkinan window manager lainnya juga), saya nggak perlu uninstall DE MATE. Jadi, ketika login, bisa pilih, mau pakai mode MATE atau mode i3wm.

Instalasinya juga mudah. Cukup ketik `sudo apt install i3`. Kemudian logout, dan coba masuk dengan pilih i3 sebagai window manager.

Tapi, jangan kaget kalau tampilannya super minimalis dan jadul seperti ini:

![Tampilan default i3wm](/assets/images/2025/685c7ba2-ab3c-4130-8fb6-b5077a26dc8b.webp)

Justru di sini letak serunya! Di tulisan ini, saya akan sharing proses saya ngulik i3wm, dari tampilan hitam polos seperti gambar di atas, sampai tampilan yang selama ini saya idamkan seperti ini.

![Tampilan final i3wm](/assets/images/2025/cc7ae05e-4722-4e0c-afdb-252f4f2413ff.webp)

Oiya, saya dapat insight tentang Linux ricing ini dari YouTube-nya Typecraft. Beberapa file config juga saya ambil dari repo dotfiles-nya beliau. Jadi, shoutout buat Typecraft yang udah bikin video tutorialnya. Sangat membantu!

## Komponen utama

Setelah saya pelajari, ada empat komponen utama yang harus dimiliki untuk meracik window manager:

1. Window manager, dalam kasus ini saya pakai tiling window manager.
2. Compositor untuk mengatur style dan animasi window.
3. Status bar untuk menampilkan list workspace, informasi waktu, dan informasi-informasi laptop lainnya.
4. Application launcher untuk menjalankan aplikasi.

## Window manager: `i3`

Karena tujuan utama saya adalah menciptakan desktop environment yang mirip omarchy, saya memilih tiling window manager. Pilihan saya jatuh kepada i3, seperti yang udah saya jelaskan sebelumnya.

Navigasi antarwindow saya buat sama persis dengan navigasi di NeoVim:
- `j` untuk ganti active window ke window bawah
- `h` untuk ganti active window ke window kiri
- `k` untuk ganti active window ke window atas
- `l` untuk ganti active window ke window kanan

Mapping ini diatur di dalam sebuah file yang terletak di `~/.config/i3/config`. Bisa di bilang, file tersebut adalah entry point ketika i3 dijalankan. Kita bisa atur mau menjalankan program apa aja saat i3 dijalankan.

Yang saya jalankan saat sesi i3 baru dimulai:
- `feh` untuk set background image
- `picom` untuk compositor
- `polybar` untuk status bar
- `rofi` untuk application launcher
- `dunst` untuk notifikasi

Saya yang terbiasa atur background via GUI cukup kaget bahwa untuk set background image saja ternyata perlu menjalankan suatu program khusus, haha.

## Compositor: `picom`

Kalau window manager itu fungsinya untuk manajemen layout window, compositor bisa dibilang fungsinya itu untuk manajemen sebuah window tunggal.

Kita bisa atur bagaimana tampilan sebuah window: corner radius, shadow, dan animasi. Bayangkan compositor ini adalah CSS-nya sebuah window.

Saya pakai picom untuk mengatur animasi dan shadow dari window-window yang sedang dibuka aja. Biar ketika ada window yang dibuka, ditutup, atau dipindahkan layoutnya, nggak terlalu kaku.

Lagi-lagi, tujuan utama saya adalah membuat environment mirip Omarchy, tanpa harus mengorbankan setup Ubuntu MATE saya.

Picom sebenarnya udah punya preset animasi `appear`, `disappear`, dan `geometry-change`. Tapi ada satu efek yang mengganggu saya: animasi fade! Alih-alih smooth, rasanya jadi siwer setiap kali buka-tutup-pindah window.

Untungnya, saya bisa dapat isi animasi dari preset-preset tersebut di repo-nya picom. Jadi, ketimbang pakai preset, saya copas semua isinya, lalu menghapus efek fade.

Hasilnya, sangat memuaskan! Begini kurang lebih hasilnya:

![Picom](/assets/images/2025/848a0ef8-3318-4fe8-9b90-c0d5f59e6d14.gif)

## Status bar: `polybar`

Status bar bawaan i3 jadul banget. Letaknya juga di bawah.

Saya ingin status bar-nya terlihat lebih modern, terletak di atas, dan pastinya bisa di-custom. Pilihan saya jatuh kepada polybar.

Ada beberapa widget yang saya pakai:
- Di sebelah kiri status bar, saya pasang `xworkspaces` untuk menampilkan workspace dengan format `%icon% %name%`
- Di tengah status bar, saya tampilkan hari, tanggal, dan jam. Sengaja saya tambahkan hari biar nggak lupa hari apa haha.
- Di sebelah kanan status bar, saya pasang bluetooth, volume, baterai, RAM usage, dan WiFi. Ada juga tulisan `Recording...` ketika saya lagi pakai Kazam untuk merekam layar.

## Application launcher: `rofi`

Komponen terakhir untuk membuat environment ini mirip dengan Omarchy adalah application launcher. Saya pakai rofi, sesuai dengan tutorial di videonya Typecraft.

Ada beberapa mode: `run`, `window`, `combi`. Saya pakai mode run biar lebih minimalis. Cukup pencet `Super+Space`, kita bisa memilih aplikasi apa yang akan kita jalankan.

![Rofi](/assets/images/2025/63a0feb3-c465-4688-ac38-68171d7e7f50.gif)

## Extras 1: notifikasi

Notifkasi bawaan Ubuntu MATE menurut saya jelek. Sebelum meracik i3, saya bahkan udah riset ada cara nggak ya buat edit style notifikasi ini. Atau, setidaknya ada program serupa untuk ganti notifikasi bawaannya ini.

Dan, ketemulah `dunst`.

Program ini sangat memenuhi kebutuhan saya, terutama customization-nya. Saya bisa edit warna border, tulisan, dan background notifikasi suka-suka. Menyesuaikan dengan tema favorit saya: tokyo night.

Ini adalah contoh notifikasinya:

![Dunst](/assets/images/2025/2d5903f3-9ca1-4483-b6d2-524bd3fea597.webp)

## Extras 2: lockscreen

Lockscreen i3wm juga jelek. Cuma blank putih, ditambah gambar bulat dengan gembok ditengahnya. Setiap kali menekan karakter di keyboard, bordernya akan berwarna hijau. Awalnya saya bingung ini apaan, haha. Ternyata lockscreen.

Saya cari alternatifnya. Sudah pernah coba i3lock-fancy. Tapi, pada dasarnya i3lock-fancy itu cuma:

- screenshot current workspace
- edit screenshot jadi blur
- atur screenshot jadi wallpaper

Ujung-ujungnya pakai i3lock lagi.

Setelah cari-cari, ketemulah: `betterlockscreen`. betterlockscreen ini sebenarnya cuma shell script biasa. Tapi, di belakangnya dia nggak pakai i3lock, tapi pakai i3lock-color: yang mana ini fork-nya dari i3lock dengan versi yang udah refined.

Hasilnya, sangat memuaskan! Simple dan minimalis!

![Lockscreen dengan betterlockscreen](/assets/images/2025/b72e10ec-730b-4fc0-b3af-d902b97433b6.webp)

## Kesimpulan

Meracik workspace sendiri ternyata seru dan menyenangkan, haha. Apalagi di era AI sekarang ini, jauh lebih mudah. Ada bingung sedikit, tinggal tanya AI. Meskipun beberapa solusi terkadang kurang tepat, tapi di kebanyakan kasus, jawaban AI sangat membantu saya meracik banyak hal.

Oiya, kalau mau setup minimalis macam saya, saya simpan konfigurasinya di [akun GitHub saya](https://github.com/adiprnm/dotfiles).

Semoga bermanfaat!
