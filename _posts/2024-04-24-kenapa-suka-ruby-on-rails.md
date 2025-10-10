---
layout: default
title: Alasan Kenapa Saya Suka Ruby on Rails
permalink: /alasan-kenapa-saya-suka-rails
image: /assets/images/adi-og.jpg
tags: Programming Tech
---

Ada satu fun fact soal diri saya: saya masuk ke bidang web development karena laptop saya kentang 😂

Awalnya saya tertarik mendalami bidang mobile development, dan nggak ada kepikiran sama sekali masuk ke bidang web development.

Saya akhirnya menyerah. Buka Android Studio aja lama banget, apalagi build app-nya. Udah coba dual boot pakai Ubuntu Mate pun tetap berat, karena ya problemnya di spek laptop yang rata kiri.

Akhirnya berkenalanlah sama web development. Waktu itu saya pikir asik juga, modal CodeIgniter dan laptop kentang udah bisa bikin web apps.

Pas magang, baru tau ada istilah front-end dan backend. Saya milih backend karena saya lebih suka ngoding buat support business logic, dan backend nggak perlu pusing gimana caranya buat gambar jadi di tengah layar.

Setelah ke CodeIgniter, saya berkenalan dengan Laravel. Awal-awal pusing banget karena banyak istilah yang sangat asing buat saya waktu itu, macam service provider. Lama kelamaan mulai biasa, tapi ya saya belum terlalu bisa maksimalin framework-nya sih, jadi nggak terlalu produktif.

Suatu waktu, akhirnya saya ketemu loker backend developer di Tech In Asia. Requirements-nya cocok dengan saya: punya pengalaman di Laravel/MVC framework yang lain, dan paham OOP. Saya coba apply dan akhirnya diterima. Inilah kantor saya sampai saya menulis artikel ini.

Backend-nya pakai Ruby on Rails. Saya pernah dengar sih, tapi belum pernah coba eksplor secara langsung, karena doktrin PHP sepertinya kuat banget waktu itu 🤣

Awal nyoba masih bingung:
- ini kok bisa pakai class langsung tanpa import kayak di PHP ya? Ooh ternyata class nya udah auto-import
- `foo_bar` ini variabel dari mana ya? Ooh ternyata method, di Ruby ternyata bisa panggil method tanpa `()`
- dan masih banyak magic lainnya.

Tapi, seiring berjalannya waktu dan lihat kode-kode engineer lain yang lebih berpengalaman, saya semakin terbiasa dengan ini semua, semakin nyaman, dan akhirnya saya jatuh cinta sama framework ini ❤️

Ini beberapa alasan kenapa saya suka banget sama Ruby on Rails.

## Development Experience yang Luar Biasa

Ngoding pakai Ruby udah kayak nulis essay bahasa Inggris aja. Beneran deh. Kita bisa panggil method tanpa `()`. Selain itu, untuk method yang return value-nya boolean, biasanya akhirnya pakai tanda tanya.

Misal: di PHP, untuk cek apakah suatu user itu aktif atau tidak, maka sintaksnya kurang lebih `$user->isActive()`. Di Ruby sintaksnya `user.active?`. Seolah-olah kayak nanya "user ini aktif nggak nih?".

## Didesain untuk Produktivitas

Ruby on Rails punya banyak helper dan built-in method yang bisa bikin kita sebagai developer lebih produktif. Misal, untuk cek apakah nama user berubah atau nggak, bisa pakai `user.name_changed?`. Cukup 1 baris aja. Kalau manual mungkin bisa jadi 3 baris.

Ruby on Rails juga framework yang lengkap banget: database versioning via migration, file storage, background job, mailer, websocket. UI framework nya pun bisa pakai React, Vue, atau Svelte. Bahkan ada React on Rails: SSR tapi pake React.

Semua tools untuk jadi full-stack developer udah ada di Ruby on Rails. Kita tinggal fokus ngoding aja. Nggak perlu setup-setup lagi secara manual, cukup update config aja.

## Semangat Open Source

Ini lebih ke idealisme sih. Saya suka open source, dan 37signals, perusahaan di mana Rails berasal, kontribusi ke komunitas open source nya banyak banget. Yang paling baru ada [Kamal](https://github.com/basecamp/kamal), [Solid Queue](https://github.com/rails/solid_queue), [Mission Control Jobs](https://github.com/rails/mission_control-jobs), dan [Thruster](https://github.com/basecamp/thruster).

Dari semua project open source itu, yang saya tangkap, goals utama mereka itu buat bikin web development lebih sederhana, murah, dan nggak bergantung ke salah satu provider cloud tertentu. Mau on-premise atau di cloud, sama aja.

## The One Person Framework

Di [pengujung video opening keynote-nya DHH](https://youtu.be/iqXjGiQ_D-A?t=3686), sang pembuat Ruby on Rails, di event RailsWorld 2023, dia menyatakan bahwa "Rails should be the one-person framework". Framework yang cukup satu orang aja, udah bisa bikin satu product. Saking produktifnya pakai Rails. Wow. Kudos buat Rails core team, menyala abangku 🔥

***

Wah, lumayan panjang juga ya tulisan kali ini. Kalau ngebahas soal Rails memang selalu menyenangkan, hehe.

Kalau pembaca berminat mau jadi solopreneur di bidang tech, coba deh pertimbangkan Ruby on Rails buat jadi tech utama product pembaca. Saya juga lagi proses develop web apps buat salah satu side hustle saya di sela-sela pekerjaan utama saya.

Semua tulisan di atas itu murni opini saya. Semua kembali lagi ke kebutuhan masing-masing.

Semoga bermanfaat!
