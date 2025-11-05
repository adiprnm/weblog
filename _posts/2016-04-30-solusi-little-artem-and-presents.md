---
layout: default
title: Solusi Codeforces 669A – Little Artem and Presents
tags: Programming
---

## A. Little Artem and Presents

> time limit per test
>
> 2 seconds
> memory limit per test
>
> 256 megabytes
> input: standard input
> output:standard output

> Little Artem got n stones on his birthday and now wants to give some of them to Masha. He knows that Masha cares more about the fact of receiving the present, rather than the value of that present, so he wants to give her stones as many times as possible. However, Masha remembers the last present she received, so Artem can’t give her the same number of stones twice in a row. For example, he can give her 3 stones, then 1 stone, then again 3 stones, but he can’t give her 3 stones and then again 3 stones right after that.
>
> How many times can Artem give presents to Masha?
>
> Input:
>
> The only line of the input contains a single integer n (1 ≤ n ≤ 109) — number of stones Artem received on his birthday.
>
> Output:
>
> Print the maximum possible number of times Artem can give presents to Masha.

***

Itu adalah salah satu dari sekian banyak soal di codeforces. Saya tergelitik untuk berbagi ide dari penyelesaian masalah ini. Langsung saja.

Berdasarkan soal, kita diminta untuk menginputkan banyak batu dengan range 1 ≤ n ≤ 109 dengan n adalah bilangan bulat. Sementara ouputnya adalah mencetak kemungkinan maksimum berapa kali Artem bisa memberikan hadiah kepada Masha (untuk example bisa dilihat langsung di sini).

Idenya begini: karena Artem tidak bisa memberi Masha banyak batu dua kali dalam satu baris (misalnya Artem udah ngasih 1, terus ngasih 1 lagi), dan output yang diminta adalah kemungkinan maksumum berapa kali Artem ngasih hadiah, maka dalam satu kali memberi batu, Artem harus memberikan batu seminimal-minimalnya kepada Marsha.

Dengan kata lain, Artem harus memberikan satu batu pada kesempatan pertama, dan 2 batu kesempatan kedua, atau sebaliknya. Kesempatan ketiga, kelima, ketujuh: pokoknya kesempatan yang angkanya ganjil, maka jumlah batu yang diberikan sama dengan kesempatan pertama. Ini berlaku juga untuk kesempatan yang angkanya genap.

Misalkan, Artem punya 10 batu, maka kemungkinannya adalah:

> 1 2 1 2 1 2 1 = 7 kali

Jika Artem punya 11 batu, kemungkinannya adalah:

> 2 1 2 1 2 1 2 = 7 kali

Karena 1+2 = 2+1 = 3, maka:

> Untuk 10 batu
> Kemungkinan : 3 3 3 1
> Sama saja dengan 10/3 = 3, sisa 1.
>
> Untuk 11 batu
> Kemungkinan : 3 3 3 2
> Sama saja dengan 11/3 = 3, sisa 2
>
> Untuk 12 batu
> Kemungkinan : 3 3 3 3
> Sama saja dengan 12/3 = 4, sisa 0

Dengan kata lain, hasil bagi menunjukan banyaknya angka 3 pada kemungkinan. Untuk 10 dan 11 batu, banyaknya angka 3 pada kemungkinan adalah 3 buah, dan untuk yang 12 batu, banyaknya angka 3 pada kemungkinan adalah 4 buah.

Sehingga ada 2 kondisi:

> Jika jumlah batu habis dibagi 3
> Kemungkinan maksimum = hasil bagi*2
>
> Jika jumlah batu tidak habis dibagi 3
> Kemungkinan maksimum = (hasil bagi*2)+1

Yah, kira-kira begitulah idenya yang kepikiran oleh saya. Mungkin ada yang lebih efisien lagi, silahkan dishare. Dan yang terakhir, semoga ide ini bermanfaat.

