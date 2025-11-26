---
layout: default
title: Mode distraction-free di NeoVim dengan Gayo + lightlime
tags: Tech
---

*Weekend* lalu saya tiba-tiba kepikiran iA Writer. *Software* yang biasa digunakan untuk menulis dan terkenal karena keminimalisannya.

Yang menarik adalah fitur *distraction-free* mode ketika menulis. Paragraf dan kalimat yang sudah lewat, akan otomatis jadi abu-abu. Sedangkan, kalimat yang sedang ditulis warnanya lebih cerah.

Terlihat sederhana, tapi ini sangat membantu saya lebih fokus dalam menulis. Tampilannya pun sangat minimalis. Hanya ada fitur dasar untuk menulis. Ada integrasi dengan AI sebagai asisten untuk menulis, tapi saya nggak terlalu tertarik dengan itu.

Sayangnya, iA Writer hanya tersedia di Windows dan MacOS.

Saya kepikiran, ada nggak ya alternatifnya yang *free* dan *open source*. Akhirnya, ketemulah GhostWriter. Saya langsung suka dengan tampilannya yang minimalis, dan yang paling penting, ada mode *distraction-free* yang saya butuhkan!

## Software-nya bagus, tapi saya memutuskan untuk cari alternatif lain

Kenapa? Karena ada bug yang cukup fatal yang tidak bisa saya terima. Aplikasinya akan *crash* ketika kita sedang dalam mode *distraction-free*. kemudian kita mau buka *file* lainnya. Kena *segmentation fault*.

Mau *contribute* untuk *patch*-nya pun saya nggak terlalu ngerti kode C++. Udah agak-agak lupa, karena terakhir ngoding C++ itu ketika kuliah, itu juga karena mata kuliah wajib.

Ditambah, saya nggak bisa *build* aplikasinya di komputer saya. Ada dependensi yang diperlukan oleh GhostWriter yang tidak tersedia di OS saya. Dokumentasinya juga cukup membingungkan:

> **Linux**
>
> Before proceeding, ensure that you have the necessary packages installed for Qt 6 and KDE Frameworks.
>
> For Debian or Ubuntu distributions:
>
>     $ sudo apt install g++ qtbase5-dev libqt5svg5-dev qtmultimedia5-dev qtwebengine5-dev libqt5concurrent5 qttools5-dev-tools qttools5-dev libkf5coreaddons-dev libkf5xmlgui-dev libkf5configwidgets-dev libkf5sonnet-dev libkf5doctools5 libkf5doctools-dev cmake extra-cmake-modules

Katanya harus install Qt 6, tapi di dependensinya masih install Qt 5. Udah coba diganti ke Qt 6 pun, versi minimalnya masih di bawah minimal version yang tertera di `CMakeLists.txt`.

Menurunkan versi minimal di `CMakeLists.txt` sangat tidak direkomendasikan, karena bisa jadi nanti kasusnya jadi *"it works on my machine"*. Jadi, pupus sudah harapan saya submit *patch* untuk *fix*-nya. Huhu.

## Tiba-tiba kepikiran, kenapa nggak cari plugin vim aja?

Saya pikir, kalau plugin-nya beneran ada, wah mantap sih. Saya masih bisa dapat benefit vim keybindings untuk edit-edit teks. Lompat-lompat antar kalimat atau paragraf jadi lebih mudah.

Setelah sedikit riset, ternyata ada!

Nama pluginnya `Goyo`. Ini plugin khusus untuk mode *distraction-free writing*. Untuk membuat teks jadi abu-abu, perlu plugin tambahan, yaitu `limelight`. Hasilnya seperti ini:

![Goyo + limelight](/assets/images/2025/2025-11-27_00-18.webp)
*Kombinasi plugin Goyo + limelight*

Minusnya, mode *distraction-free* ini per paragraf, bukan per kalimat. Tapi masih bisa saya terima ketimbang *crash* ketika buka *file* di mode *distraction-free*. Selain itu, ini NeoVim! Text editor favorit saya!

## Kenapa nggak pakai Obsidian aja?

Ada yang bertanya seperti ini di salah satu reply [Threads saya](https://www.threads.com/@by.adipurnm/post/DRYThGngRA0?xmt=AQF0yvfwzopNIYBu7LMX7DnHCiNAROB6UBrMQDdjNb1YVg). Ya, saya awalnya pakai Obsidian, tapi saya rasa Obsidian itu bukan untuk saya.

Saya lebih nyaman nulis di NeoVim / Pluma (text editor bawaan Ubuntu MATE) ketimbang Obsidian. Ini hanya masalah selera aja sebenarnya. Obsidian bagus kok, dan stabil juga.

Sebelum nemu `Goyo` + `limelight`, saya nemu plugin untuk *enable distraction-free* di Obsidian. Hasilnya mirip dengan `Goyo` + `limelight`. Repository-nya bisa dicek di [https://github.com/ryanpcmcquen/obsidian-focus-mode](https://github.com/ryanpcmcquen/obsidian-focus-mode).

Atau, bisa langsung install di Obsidian via **Settings > Community Plugin**, lalu cari dengan kata kunci `Focus Mode` dan install plugin-nya.

Hasilnya seperti ini:

![Obsidian Focus Mode](/assets/images/2025/2025-11-27_00-34.webp)
*Obsidian Focus Mode*

Ketika pertama kali install, mungkin teks abu-abunya akan terlihat kurang gelap. *Opacity*-nya bisa diatur via CSS yang terletak di *folder vault*. Foldernya ada di `.obsidian/plugins/obsidian-focus-mode/style.css`. Kamu perlu centang opsi tampilkan *hidden folder* di *file explorer* kamu. Silahkan tanya AI gimana caranya, hehe.

Ini *style* punya saya:

```css
.focus-mode .cm-s-obsidian div:not(.CodeMirror-activeline) > .CodeMirror-line {
    opacity: 0.5;
    filter: saturate(0.85);
}
```

Jangan diubah semuanya ya! Cukup sesuaikan nilai *opacity*-nya, lalu simpan. Coba buka lagi Obsidian dan masuk ke *focus mode*, kemudian lihat apakah perubahannya sudah sesuai atau belum.

Itu saja. Semoga bermanfaat!
