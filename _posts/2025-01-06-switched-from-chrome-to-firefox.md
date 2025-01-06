---
layout: default
title: Switched from Chrome to Firefox
---

Google Chrome used to be my primary browser. But not anymore. Recently, I switched to Firefox.

The reason I use Chrome was because it was so snappy on my laptop. Using Firefox somehow was so laggy at the time. It was probably because of the insufficient RAM. But since I upgraded my RAM some time ago, I thought it was worth to retry.

I was also curious about the actual memory usage of Chrome and Firefox since my reasons to choose the primary browser were so subjective before. So, asked Claude and here was the answer:

> Chrome:
>
> - Known for being memory-intensive due to its process-per-tab architecture
> - Each tab and extension runs as a separate process for stability and security
> - Memory usage increases significantly with multiple tabs open
> - Can consume large amounts of RAM, especially on systems with limited memory
>
> Firefox:
>
> - Generally more memory-efficient than Chrome
> - Uses a more conservative multi-process model
> - Better memory management with many tabs open
> - Has features like "unload tab" to free up memory

The *Generally more memory-efficient than Chrome* thing hooked me. So, I tend to prove it. I opened 9 different URLs for each tab in Incognito mode. Here are the results:

![Chrome Memory Usage](/assets/images/2025/01/chrome-memory-usage.png)
*Chrome memory usage: 652.8MB*

![Firefox Memory Usage](/assets/images/2025/01/firefox-memory-usage.png)
*Firefox memory usage: 467.6MB*

It's 185.2MB in difference! Claude is correct!

Instead of memory usage, several factors made up my mind to switch.

## Web Push Notification

Since I use Ubuntu mate, the Firefox web push notification dialog is more compact than Chrome; I like it. Chrome's web push notification is just too big and to me that's annoying.

![Chrome Web Push Dialog](/assets/images/2025/01/chrome-web-push-notif.png)
*Chrome web push dialog*

![Firefox Web Push Dialog](/assets/images/2025/01/firefox-web-push-notif.png)
*Firefox web push dialog*

## Native HTML Element

The native HTML select and date picker element UI in Firefox looks more modern than in Chrome.

![Chrome HTML select element](/assets/images/2025/01/chrome-select-element.png)
*Chrome HTML select element*

![Chrome HTML date picker element](/assets/images/2025/01/chrome-datepicker-element.png)
*Chrome HTML datepicker element*

![Firefox HTML select element](/assets/images/2025/01/firefox-select-element.png)
*Firefox HTML select element*

![Firefox HTML datepicker element](/assets/images/2025/01/firefox-datepicker-element.png)
*Firefox HTML datepicker element*

Based on those aspects, there are no reasons yet to switch back to Chrome. Yes, I know that Chrome has the Ask AI feature, but for now I don't even need it yet.
