---
layout: default
title: Buku Tamu
permalink: /buku-tamu
reply_to_email: none
---

{% if site.guestbook_provider == "meadow" %}

> **INFO:**<br>
> Maaf ya, sepertinya buku tamu [sedang mengalami gangguan](https://meadow.cafe/vomits/0008-azure-disabled-my-account-trip-to-the-cabin/){: target="_blank" }. Semoga bisa sesegera mungkin kembali normal.

<script async src="https://guestbooks.meadow.cafe/resources/js/embed_script/724/script.js"></script>
<div id="guestbooks___guestbook-form-container">
    <form id="guestbooks___guestbook-form" action="https://guestbooks.meadow.cafe/guestbook/724/submit" method="post">
        <div class="guestbooks___input-container">
            <input placeholder="Nama" type="text" id="name" name="name" required>
        </div>
        <div class="guestbooks___input-container">
            <input placeholder="Website (opsional)" type="url" id="website" name="website">
        </div>
        <div id="guestbooks___challenge-answer-container"></div>
        <br/>
        <div class="guestbooks___input-container">
            <textarea placeholder="Pesan kamu..." id="text" name="text" style="width: 100%; box-sizing: border-box; resize: vertical;" required></textarea>
        </div>
        <br/>
        <input type="submit" value="Kirim">
        <div id="guestbooks___error-message"></div>
    </form>
</div>
<div id="guestbooks___guestbook-made-with" style="text-align: right;">
    <small>Lovingly made with <a target="_blank" href="https://guestbooks.meadow.cafe">Guestbooks</a></small>
</div>
<hr style="margin: 1em 0;"/>
<h3 id="guestbooks___guestbook-messages-header">Messages</h3>
<div id="guestbooks___guestbook-messages-container"></div>

{% else %}

> **Note:**<br>
> Form berikut akan mengarahkanmu ke email client. Penambahan entri buku tamu akan saya tambahkan secara manual.

<form id="guestbook-form" action="mailto:{{ site.email }}" method="get">
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


***

### Pengunjung


{% for entry in site.data.guestbook_entries %}
> **[{{ entry.name }}]({{ entry.website }}){: class="no-text-decoration" }**&nbsp;  <small>{{ entry.date | date: "%b %d, %Y" }}</small>
>
> {{ entry.message }}
{% endfor %}

{% endif %}
