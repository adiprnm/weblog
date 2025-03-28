---
layout: default
title: Balik ke terminal
---

Di tulisan sebelumnya, [saya mencoba Windsurf: salah satu AI-powered code editor](/nyobain-windsurf).

Setelah mencobanya, saya memutuskan untuk kembali lagi ke Neovim di terminal. Kenapa?

# Editornya terasa berat di laptop saya

Laptop saya saat ini adalah Lenovo IdeaPad S340 14api, dengan RAM 20gb dan prosesor AMD Ryzen 5 3500U. Dengan spec ini, membuka AI-powered code editor rasanya berat sekali. Padahal plugin yang diinstal cuma sedikit. Alih-alih produktif, justru malah keburu kesal sendiri.

Yah, saya pakai laptop ini udah 5 tahun sih. Memang sudah harusnya upgrade.

# Pluginnya sedikit

By default, per saya nulis ini, Winsurf menggunakan Open VSX Registry sebagai extension marketplace. Katanya sih bisa diganti, tapi pas saya klik, settings yang dimaksud nggak ada.

![image.png](/assets/images/2025/53cfa6b3-de0d-4d2b-92ec-848b7339d776.webp)

Sayangnya, plugin-plugin yang diperlukan untuk develop aplikasi Rails sedikit sekali di sini. Saya install extension untuk Rubocop, Windsurf-nya malah makin lemot. Aneh banget.

# Codeium chat sudah cukup

Saya baru tau bahwa Codeium punya fitur chat. Di Neovim, cukup ketik `:Codeium Chat`, maka chat akan terbuka di browser.

![image.png](/assets/images/2025/0a1b2e7a-97a9-461d-9cdc-8acb214c6770.webp)
*Tampilan Codeium Chat*

Untuk menguji keakuratannya, saya mencoba melakukan sedikit enhancement di SimpleBlog: mengurutkan stats berdasarkan jumlah visits terbanyak, dan mengonversi file yang diupload menjadi format WebP, kecuali yang di-upload adalah file GIF.

Hasilnya, dengan Base Model saja udah cukup memuaskan. Kode yang disarankan berjalan sesuai dengan harapan saya. Hanya saja, prompt yang digunakan harus cukup rinci.

Misal, saya mengedit sebuah file HTML yang menggunakan Tailwind. Saya ingin membuat sebuah section menjadi sticky.

Saran yang diberikan memang secara hasil sudah betul, tapi hasilnya berupa pembuatan nama class baru untuk membuat section jadi sticky. Modelnya belum cukup pintar untuk menentukan bahwa konteks yang saya berikan menggunakan Tailwind.

Setelah saya beri tahu bahwa halaman tersebut menggunakan Tailwind CSS, baru dia ngerti dan hasilnya cukup sesuai. Yah, namanya juga model gratisan sih.

Karena Codeium Chat ini jalan di browser, kita masih harus copas manual ke NeoVim. Nggak se-praktis di Windsurf yang tinggal pencet Ctrl+Enter untuk apply suggestion. Tapi, bagi saya masih okelah, masih bisa diterima.

Oiya, supaya bisa menggunakan Codeium Chat dan menambahkan context di local, perlu set `enable_chat = true`, `enable_local_search = true`, dan `enable_index_service = true` ketika `setup`.

Saya penasaran dengan plan Pro-nya sih. Mungkin saya akan coba subscribe. Hasilnya nanti saya tulis juga di blog ini.
