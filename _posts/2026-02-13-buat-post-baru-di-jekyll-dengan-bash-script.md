---
layout: default
title: Buat post baru di Jekyll dengan bash script
tags: tech
---

Setiap kali mau buat post baru di Jekyll, yang saya lakukan itu begini:

1. Buka NeoVim
2. Buat file markdown baru di folder `_posts`
3. Copy frontmatter dari post sebelumnya dan sesuaikan isinya
4. Mulai menulis

Ada beberapa pain point yang saya rasakan dengan flow ini:

1. Harus ngetik nama file manual. Format file post di Jekyll itu kan `yyyy-mm-dd-slug.md`. Jadi bayangkan, setiap kali mau bikin post, saya harus ketik manual itu semua. Belum lagi kalau judulnya cukup panjang. Pernah juga beberapa kali tulisan sudah dibuat dan di-push ke GitHub, tapi tulisan tidak muncul di blog karena ternyata tanggalnya typo jadi future date.
2. Folder `_posts` itu ada di tengah-tengah. Karena saya buka di NeoVim, ada beberapa extra step untuk masuk ke dalam folder dan membuat file di dalam folder tersebut.

Karena flow-nya gitu-gitu aja, saya automate aja pakai bash script. Karena skill bash script saya terbatas, saya minta [AI](/langganan-glm-4.7) buatkan script-nya.

Jadi, untuk buat post baru, cukup ketik perintah `new-post "Judul post"`, dan file akan otomatis masuk ke dalam folder `_posts` dengan format file post yang saya tulis di poin 1. Tanggalnya akan selalu di-set ke tanggal perintah tersebut dijalankan.

Kalau mau buat draft post dulu, cukup ditambah flag `--draft`, sehingga perintahnya jadi `new-post "Judul post" --draft`

Saya heran juga kenapa baru kepikiran baru-baru ini, haha. Padahal tahun 2025 saya lagi rajin-rajinnya nulis blog post.

Berikut script yang saya pakai. Simpan di dalam folder yang terdaftar dalam `PATH` dengan namaa `new-post`, misalnya kalau di Linux itu `~/.local/bin`

```bash
#!/bin/bash

# Jekyll Post Generator
# Usage: ./new-post.sh "Post Title" [tag1,tag2,tag3] [--draft]

set -e

# Default values
POST_DIR="_posts"
DRAFT_DIR="_drafts"
IS_DRAFT=false
DATE=$(date +%Y-%m-%d)

# Parse arguments
TITLE=""
TAGS=""

if [ -z "$1" ]; then
  echo "Usage: ./new-post.sh \"Post Title\" [tag1,tag2,tag3] [--draft]"
  exit 1
fi

TITLE="$1"

if [ -n "$2" ]; then
  if [ "$2" = "--draft" ]; then
    IS_DRAFT=true
  else
    TAGS="$2"
  fi
fi

if [ -n "$3" ]; then
  if [ "$3" = "--draft" ]; then
    IS_DRAFT=true
  fi
fi

# Convert title to filename-safe format
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')

# Set directory and filename
if [ "$IS_DRAFT" = true ]; then
  FILENAME="$DRAFT_DIR/${DATE}-${FILENAME}.md"
else
  FILENAME="$POST_DIR/${DATE}-${FILENAME}.md"
fi

# Check if file already exists
if [ -f "$FILENAME" ]; then
  echo "Error: File already exists: $FILENAME"
  exit 1
fi

# Create the post file
cat > "$FILENAME" << EOF
---
layout: default
title: $TITLE
tags: $TAGS
---

EOF

echo "Created: $FILENAME"
echo "You can now edit your new post!"
```

Kalau kamu pakai static site generator lain yang direktorinya berbeda, silahkan minta AI saja untuk sesuaikan, hehe.
