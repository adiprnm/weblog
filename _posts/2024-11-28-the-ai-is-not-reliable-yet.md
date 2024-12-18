---
layout: default
title: The AI is not reliable yet
permalink: /the-ai-is-not-reliable-yet
image: /assets/images/adi-og.jpg
tags: tech
---

I encountered some technical challenge while deploying [Let's Blogging](https://letsblogging.xyz) to production. It was about was the subdomain wildcard implementation. I knew how to do it, but turned out it didn't work as I expected.

I asked the solution to Claude and ChatGPT. Both of them gave the different solutions, and neither of the solution worked.

So I thought, "If the robot didn't know the answer, then human probably do".

Then, I used the old and proven method: Google search. After a few attempts, I found the answer. Following the suggested steps, I implemented the solutions, and viola! I worked perfectly.

[This blog post](https://petr.codes/blog/dokku/wildcard-certificate/) explained the steps clearly. Turns out, all I need is a wildcard certificate. TIL. This explanation is the key:

> For a wildcard certificate, you need to use a different challenge with Let’s Encrypt called `DNS-01` where you need to change DNS to prove, you are the owner of the domain.

When it comes to problem like this, I found that the AI is unreliable yet. At least to me. I might be wrong. Maybe I used the wrong prompt or my prompt was too generous for the AIs. Who knows.

Google search still the best way to find the answers for every questions. The blog posts and articles are mostly made by human. Human experienced what they wrote. I think that what make it is more reliable than the answers from the AIs.

I don't know what if someday, the blog posts and the articles on the internet is mostly made by AI. I really hope that it won't happen.
