---
layout: default
title: Navigasi super cepat dengan keyboard di Ubuntu MATE
tags: Linux
---

Saya menulis serunya meracik desktop environment sendiri di Linux [di sini](/linux-ricing). Saya cukup puas dengan hasilnya, tapi saya memutuskan untuk kembali pakai DE MATE. Kenapa?

## Tiling window manager bukan untuk saya

Perlu diakui, saya ngerasa tech savvy banget ketika pakai tiling window manager. Tapi, here's the thing: ketimbang do the real work, saya malah lebih sering ngedit-ngedit file konfigurasi.

Selain itu, saya tim minimalist dev. Saya ngoding cuma pakai satu layar, yaitu layar laptop. Dengan resolusi layar 1920x1080, benefit tiling window manager bagi saya kurang terlalu berasa.

Saya malah cukup sering ngedit-ngedit ukuran window kalau buka lebih dari 1 window. Tentunya ngedit ukuran window ini pakai keyboard, yang mana kadang masih belibet karena otak saya sudah cukup penuh dengan vim motion, hahaha. Canda deng, karena belum terbiasa aja.

Belum lagi, ada salah satu fitur yang bagusnya di-set windownya secara floating, misal Slack Huddle. Kalau nggak dikonfigurasi secara manual, ketika dibuka otomatis akan jadi window yang splitted ketimbang floating.

Di samping itu semua, saya suka konsep navigasi pakai keyboard di tiling window manager ini. Sehingga kepikiran: bisa nggak ya saya atur shortcut keyboard di DE MATE semirip mungkin dengan di i3? At least, shortcut untuk pindah workspace dan pindah window, biar navigasi makin satset.

## ... but then I thought, I'm on Linux! I can do whatever I want!

Itu adalah kata-kata PewDiePie di [video ini](https://www.youtube.com/watch?v=pVI_smLgTY0). Dan tentu saja dia 100% betul, haha.

Saya buka menu shortcut di Menu > Keyboard Shortcut: menu yang saya jarang akses selama bertahun-tahun. Lalu, apa yang saya dapatkan di sini?

![Window Management](/assets/images/2025/2025-11-27_11-11.webp)

Window management! Dan yang paling penting, ada shortcut untuk pindah workspace dan window immediately!

Langsung saja, saya mapping shortcut nya ke behavior di i3. `Super+1`/`Super+2`/`Super+3` untuk pindah ke workspace 1/2/3. `Super+Escape` untuk pindah-pindah window dengan cepat.

Hasilnya?

![Pindah-pindah workspace dan windows](/assets/images/2025/ezgif-29031a41b8c18c06.gif)

Dadah, `Alt+Tab!`
