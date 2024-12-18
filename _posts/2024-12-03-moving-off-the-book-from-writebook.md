---
layout: default
title: Moving off the book from Writebook
permalink: /moving-off-the-book-from-writebook
image: /assets/images/adi-og.jpg
tags: tech side-hustle
---

I wrote a practical deployment guide using Dokku and published it using [Writebook](https://once.com/writebook).

It's all good, but it lacked the book invitation feature. I planned to write more e-books and publish them independently using Writebook. Well, I can invite them manually, but it would be nice if it invites the book's buyer as a reader automatically once the payment is made.

The Writebook license said that I could do whatever I wanted with the source code, including adding these features by myself, but this sentence made me think twice before doing it:

> **Can we modify Writebook for our own purposes?**
>
> Yes, you can make whatever changes to the Rails code that you’d like, but once you change the code from the included code, you’re on your own. Any updates might overwrite your changes as well.

Although Writebook is considered a finished software, the overwritten code scenario is unacceptable. The only safe way to add these features is probably by adding a Rails engine. But I don't have the urge to do that at the moment.

Besides, I want to save some resources on my tiny server. The Writebook requires 2 containers: one is for the app server, and the other one is for a Redis instance. Removing these two containers will save some server memories.

So, I decided to temporarily move the book content from Writebook to a PDF file and publish it on [Clicky](https://clicky.id/adipurnm/self-hosting-dengan-dokku). It's a free e-book anyway, but unfortunately, it's only available in Bahasa.

I really want to publish more books using Writebook. Maybe later.

