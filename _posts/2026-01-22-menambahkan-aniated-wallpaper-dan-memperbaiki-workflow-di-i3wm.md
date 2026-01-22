---
layout: default
title: Menambahkan animated wallpaper dan memperbaiki workflow di i3wm
tags: Tech
---

Masih ingat dengan [tulisan ini](/linux-ricing)? Beberapa bulan setelah tulisan ini dibuat, saya sempat balik lagi menggunakan DE Ubuntu Mate dengan window manager bawaan, yaitu Marco.

Semua oke-oke aja sebenarnya, sampai suatu ketika, saya ingin menambahkan animated wallpaper, yang terinspirasi dari rekan kerja saya. Saya coba beberapa alternatif yang ada, tapi semua gagal. Hingga akhirnya saya dengan yakin menyimpulkan bahwa memang mustahil, dikarenakan keterbatasan Marco.

Oleh karena itu, saya mempertimbangkan kembali untuk kembali ke workflow i3wm. Asumsi saya sih harusnya pakai `xwinwrap` dan `mpv` untuk set animated wallpaper akan berhasil, karena background saat ini pun saya set pakai `feh`.

Tapi, problem utama pakai i3wm itu, saya nggak pakai monitor eksternal. Hanya mengandalkan layar laptop. Sedangkan, default layour workspace-nya itu tile/grid. Jadi, setiap buka aplikasi biru, tampilannya begini:

![Tile/grid layout i3wm](/assets/images/2026/2026-01-22_22-48.webp)
*Tile/grid layout*

Kalau pakai eksternal monitor sih sepertinya oke aja, karena space-nya cukup luas. Kalau cuma mengandalkan layar laptop, malah jadi repot. Harus sering resize window kalau perlu ukuran window yang lebih lebar. Jujur aja, waktu jadi lebih sering habis oleh hal seperti ini ketimbang do the real work.

Jadi kepikiran, sepertinya memang harus set default layout-nya jadi tabbed aja. Toh saya juga sekarang udah nggak terlalu terobsesi dengan Omarchy. Cukup tambahkan `workspace_layout tabbed` di `~/.config/i3/config`, lalu tekan `Super+Shift+r`. Sekarang defaultnya sudah jadi tabbed seperti ini.

![Tabbed layout i3wm](/assets/images/2026/2026-01-22_22-55.webp)
*Tabbed layout layout*

Sebenarnya ada satu layout lagi: stacked layout. Tapi saya kurang cocok pakai layout ini.

Ada beberapa keuntungan yang saya peroleh dengan ganti default layout jadi tabbed:

* Navigasi lebih simple, cukup tekan `Super+h` dan `Super+l` untuk pindah-pindah window.
* Saya jadi lebih bisa fokus karena ada dua window yang terbuka dalam satu layar sering jadi distraksi.
* Mendapatkan kembali keuntungan navigasi full dengan keyboard (kecuali aplikasi desktop tertentu macam Teams dan Slack yang masih perlu mouse)

Kembali lagi ke tujuan utama saya balik ke i3wm. Benar aja, setelah saya coba, ternyata langsung berhasil.

![Animated Wallpaper](/assets/images/2026/ezgif-11665e42333ab817_1.gif)

Tambahkan ini di `~/.config/i3/config`. Replace `/path/to/video.mp4` dengan video yang akan dijadikan sebagai wallpaper.

```
exec_always xwinwrap -ov -ni -g 1920x1080 -- mpv --fs --loop-file --no-audio --no-osc --no-osd-bar -wid WID --no-input-default-bindings /path/to/video.mp4
```

Videonya bisa dicari dan didownload secara gratis di Pixabay dengan kata kunci [Lofi](https://pixabay.com/videos/search/lofi/).
