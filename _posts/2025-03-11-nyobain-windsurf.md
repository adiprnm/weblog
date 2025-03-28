---
layout: default
title: Nyobain Windsurf
---

Semenjak AI untuk coding mulai booming, saya mencoba untuk memasang beberapa plugin AI untuk membantu saya coding. Saya menemukan sebuah AI autocompletion gratis di X yang namanya Codeium. Masih saya pakai hingga saat ini.

Kemarin-kemarin, saya mengunjungi lagi website Codeium setelah sekian lama. Ternyata, mereka ada rilis code editor bernama Windsurf.

![Windsurf](/assets/images/2025/06bcf977-eb08-4e1e-b90e-d4b6f67fbb16.webp)

Saya sudah coba Cursor sebelumnya, dan banyak fitur yang sangat mempercepat proses development. Salah satunya adalah generate code dari prompt.

Saya jadi penasaran, apakah di Codeium ini bisa generate code dari prompt atau nggak. Setelah ditelusuri ternyata bisa, pakai command `:Codeium Chat`. Hanya saja, command tersebut akan membuka sebuah tab browser baru daripada buka inline prompt di baris tertentu seperti Cursor. Sehingga, UX-nya jadi kurang.

Saya searching sepertinya belum ada dev yang mengembangkan untuk inline prompt di vim terminal. Hal ini membuat saya berpikir ulang. Sepertinya memang sudah waktunya mencoba code editor AI ini.

# Kenapa lebih memilih Windsurf?

Sederhananya, karena saya sudah cukup nyaman pakai Codeium. Model versi gratisnya, ditambah pengalaman ngoding beberapa tahun yang saya miliki, sudah sangat lebih dari cukup.

Ditambah, tampilan Windsurf terlihat lebih segar ketimbang Cursor. Entahlah, saya merasa kalau Cursor itu tampilannya seperti terlalu sibuk aja, ahaha.

# Beberapa kendala

Yang jadi pertimbangan utama adalah vim keybindings. Saya nggak tau apakah kedua code editor itu support vim keybindings atau nggak. Pikir saya, kalau nggak support, saya sepertinya akan stay di vim terminal dulu.

Ternyata, pas pertama kali buka editor, ada opsi untuk menggunakan Vim keybinding. Sangat memudahkan sekali proses onboarding.

Kendala berikutnya adalah default vim keybinding yang bentrok dengan default shortcut Windsurf. Di Windsurf, `Ctrl+I` akan menampikan inline prompt. Sedangkan di vim, `Ctrl+I` di normal mode akan lompat ke file selanjutnya di dalam jump list.

Untuk ini, saya ganti mappingnya di **Preferences: Open Keyboard Shortcuts** menjadi Ctrl+K, sama seperti Cursor.

Ada beberapa shortcut lagi yang saya sudah terbiasa pakai di vim terminal, dan harus di-remap di Windsurf. Sejauh ini, yang baru saya remap hanya command-command ini, karena ini command-command yang sering saya pakai.

![settings.json](/assets/images/2025/2dd9d4d5-0bbf-46ee-a5e2-428d010c1950.webp)

Dengan setup begini, saya masih bisa dapat benefit dari vim dan tetap mendapatkan fitur-fitur Windsurf.

# Overall experience

Saya baru-baru ini pakai Windsurf, dan sejauh ini sangat memuaskan. Saya mungkin akan lebih banyak ngoding di Windsurf untuk ke-depannya, sambil menyesuaikan mapping shortcut vim yang belum ter-mapping di Windsurf.

#codeeditor #ai
