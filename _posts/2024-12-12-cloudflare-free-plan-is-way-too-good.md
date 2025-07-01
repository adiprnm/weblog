---
layout: default
title: Cloudflare free plan is way too good
permalink: /cloudflare-free-plan-is-way-too-good
image: /assets/images/adi-og.jpg
tags: Tech
---

I encountered a latency issue after deploying [Let's Blogging](https://letsblogging.xyz). Accessing the subdomain is quick, but accessing the homepage could take 1 minute! Super weird. I didn't have any idea why this happened. I suspected that it was probably caused by the wild card certificate, but later I thought that didn't make any sense.

I checked the DNS propagation, and it displayed 2 different IPs. One of them was my server's IP. The other one turned out to be a parking IP of Namecheap, but somehow, using Namecheap's default DNS management tool, I couldn't find the DNS record for that IP.

So I asked the community, hoping that someone already had the same experience as me. One of the community members suggested moving the DNS to Cloudflare. I then did it, and finally, that parking IP is there! I deleted the record, and boom! The homepage became as quick as the subdomain page.

***

Well, that was not the first time I used Cloudflare. I tried it to Kanyaah years ago to fix the SSL issue, but after figuring out the root cause, I moved back to the default DNS management tool. I felt that using Cloudflare to solve the SSL issue was too overkill.

Now, I'm using it again. After exploring the features, I would say that using Cloudflare after buying a domain **is a must**. Cloudflare provides everything a website needs: DNS, SSL, caching, email, caching, analytics, security, etc.

We can use Cloudflare as the DNS server. The setup process is easy. We can import the records from our previous DNS records, thus making it super easy.

We can set up the SSL certificate in Cloudflare as well. By default, it's set to the *Flexible* mode. We can change it to another mode as needed. I happened to experience too many redirect errors. This was occurred if we use the proxied mode, and the SSL mode is set to *Flexible*. [The documentation](https://developers.cloudflare.com/ssl/troubleshooting/too-many-redirects/#encryption-mode-misconfigurations) explained what happened behind the scenes.

We can also set the email forwarding! This is my favorite feature. I was looking for a way to do something like this, since subscribing to a mail hosting for each email address is too much for my projects. The cheapest was around $2 per email address. I might end up spending $6 a month just for email hosting.

Another best part of it is the analytics. I don't know if Cloudflare has this feature yet. It provides what I need from the analytics: the visits, page views, page load time, and other metrics of web performance.

And what's even great is that all of it is available in the free plan!!! It's like "Oh God, this is too good to be true". The free versions they offered, to me, it's like the premium feature. All I need is available on the free plan.

I'm kinda regret not exploring the Cloudflare features earlier.
