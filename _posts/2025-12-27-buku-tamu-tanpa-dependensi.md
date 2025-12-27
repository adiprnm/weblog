---
layout: default
title: Buku tamu tanpa ketergantungan ke pihak ketiga
tags: Blogging
---

Per saya nulis ini, [layanan buku tamu](https://guestbooks.meadow.cafe) karya [Meadow](https://meadow.cafe) yang saya gunakan belum bisa diakses karena akun Azure-nya diblokir. Mau pindah provider pun, data backup-nya rupanya disimpan di layanan Azure juga, yang berarti data backupnya pun jadi nggak bisa diakses.

Jiwa ADHD saya meronta, haha. Awalnya malah saya mau bikin aplikasi alternatif-nya, atau ya sudah, karena source code buku tamunya juga open source, saya deploy aja kode-nya Meadow di server saya.

Tapi...

1. Saya lagi nggak mau repot nambah aplikasi untuk di-maintenance.
2. Saya menghindari akun saya keblokir seperti yang dialami oleh Meadow.

Di tengah kebingungan itu, terbesit sebuah ide:

## Bagaimana kalau isi buku tamu via email aja?

Flownya masih sama dengan yang sekarang. Tapi, ketimbang kirim ke server, form-nya sekarang diarahkan ke email. Jadi, pengunjung nanti tinggal klik submit aja.

Memang, jadinya saya harus input entri buku tamu secara manual ke website, dan ada UX pengunjung yang harus dikorbankan. Tapi, karena yang ngisi juga biasanya nggak banyak-banyak amat, bahkan bisa dibilang jarang, saya pikir masih doable, nggak terlalu repot, dan cukup dapat diterima.

Dengan sedikit JavaScript, buku tamu buatan saya ini bisa berfungsi seperti yang saya inginkan.

Tampilannya mirip dengan buku tamu sebelumnya. Hanya saja, saya kasih sedikit notice message supaya pengunjung nggak terlalu kaget kalau tiba-tiba diarahkan ke aplikasi email client macam GMail.

![Buku tamu](/assets/images/2025/2025-12-27_09-53.webp)

## Mengurangi dependensi eksternal

Langkah ini saya ambil salah satunya adalah untuk mengurangi dependensi terhadap layanan eksternal, meskipun itu gratis. Saya sangat menghargai guestbook karya Meadow. Tapi sudah saatnya saya memiliki mekanisme buku tamu sendiri.

Kalau layanan guestbook Meadow sudah kembali pulih, saya berencana untuk memindahkan semua entri buku tamu secara manual ke blog ini.

Oiya, kalau kamu juga tertarik, kamu bisa pasang kode berikut di website kamu. Cukup ganti email `your-email@example.com` dengan email yang ingin kamu pakai untuk menerima entri buku tamu.

```html
<form id="guestbook-form" action="mailto:your-email@example.com" method="get">
    <div class="mb-2">
        <label for="name">Nama</label>
        <input type="text" id="name" required placeholder="Nama kamu...">
    </div>
    <div class="mb-2">
        <label for="website">Website (optional)</label>
        <input type="text" id="website" placeholder="Website kamu...">
    </div>
    <div class="mb-4">
        <label for="message">Pesan</label>
        <textarea id="message" required placeholder="Pesan kamu..." rows="5"></textarea>
    </div>
    <input type="submit" value="Submit">
</form>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("guestbook-form")
        form.addEventListener("submit", function(e) {
            e.preventDefault()
            const name = document.getElementById("name")

            let bodyMessage = `${message.value}\n\n\n${name.value}`
            if (website.value != "") {
                bodyMessage = `${bodyMessage}\n${website.value}`
            }

            window.location.href = `${form.action}?subject=Hello dari ${name.value}&body=${encodeURIComponent(bodyMessage)}`;
        })
    })
</script>
```
