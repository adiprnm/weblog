---
layout: default
title: Google Maps's shortest path algorithm lacks weighting
permalink: /google-maps-shortest-past-algorithm-lacks-weighting
image: /assets/images/adi-og.jpg
tags: Tech
---

On February, my wife and I went on vacation. It's about 3 hours away from my city. That was the first time we'd visited a place we'd never visited before with only three of us: me, my wife, and my son.

As first-timers, we depended heavily on Google Maps as a guide. Everything went smoothly when we headed to the destination city. But it was a disaster when we returned to our city.

Yes, Google Maps redirected us to the shortest path, but it was through the forest! What's even worse, it started to get dark and the rain didn't seem to stop. It's OK if it was just me, but I also brought my wife and children at the time.

Fortunately, we made it before dark, but we decided to stay one more night in the neighborhood city and continued the journey tomorrow morning.

That is not my first experience with Google Maps. I've experienced it on other occasions when traveling with my friends.

This got me thinking: I think there is a missing part of this shortest path algorithm. The current algorithm is dangerous. In the worst-case scenario, It could cause loss of life! What if somebody redirected to a way with many bends, with a steep cliff on the edge, even though there is another safer road even though it is a little bit further away? This has already happened anyway [to tourists from Russia in Bali](https://www.cnnindonesia.com/nasional/20230116194854-12-901169/4-wn-rusia-kecelakaan-di-bali-mobil-terjun-ke-jurang-25-meter).

Google should start to implement weighting when determining the shortest path. It should be the combination of:

- the width of the road
- the condition of the road
- the contour of the area
- the number of sharp bends

These aspects have their own weight, then calculated using the formula to receive the score. The higher the score, the more recommended the path is.

By considering at least these 4 aspects, I believe that we could get a better result for the shortest path algorithm. I believe Google can do this with its technology. The shorter path only is not enough. It should be short and safe. Or safe and short. Safety must come first, after all. Nobody wants to risk his life following the dangerous shortest path.
