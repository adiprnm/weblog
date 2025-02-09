---
layout: default
title: Build it yourself
---

Recently, I have been working on a weekend project. [The v1](https://world.hey.com/jason/version-1-is-for-you-658422f3) is finished. Currently, I am preparing for the release. I plan to release it at the end of the month.

Unlike [Kanyaah](https://kanyaah.com)— my previous project, in this project, I stuck to the vanilla Rails stack as much as possible. Which means, less dependency on external libraries. I agree with what Jorge Manrubia wrote at the 37signal dev blog: [A vanilla Rails stack is plenty](https://dev.37signals.com/a-vanilla-rails-stack-is-plenty/).

Armin Ronascher also writes in his blog about the insanity of external dependency: [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/). So, based on those blog posts, I want to give it a try.

My end goal is to use this project as the boilerplate for my next projects. A boilerplate that produces the apps that last forever, without having to deal with dependency churn.

## No build and authentication

I use #nobuild: the CSS and JS are served directly to the browser. No minification, no obfuscation. Just vanilla CSS and JS. It makes the tracing easier. I once had a bad time tracing the error in the JS code. Not anymore. I love it. It's a tribute from me to the open web.

When it comes to authentication, Devise is my go-to library. But Devise contains too much code that I don't need. And since Rails 8 supports authentication generation, I built it myself, along with the registration flow and the SSO implementation. Authentication is not that hard, after all.

Using Devise as the authentication system, I have to add several dependencies:

- The `devise` gem itself
- The `omniauth-google-oauth2` and `omniauth-rails_csrf_protection` gem for SSO implementation

It's 3 gems already! And now, since I built the authentication myself, I only need the `oauth2` gem for the SSO. But if you read [the source code](https://gitlab.com/oauth-xx/oauth2/-/tree/main), the code is not that complicated. Well, I still can build it myself.

## Subscription

The payment gateway I use offers a recurring payment feature, but it supports two payment methods only, which is not ideal for my target customers. So, I built the subscription flow myself, with trial mode enabled. And again, it's not that hard.

I use the official payment gateway gem. And since I use the gem to charge the transaction only, I still can build it myself.

## Next plan

Well, I don't plan to build it myself in those aspects in the first place. But come to think of it, turns out I still can get rid of some more dependencies. I still have some time before releasing it.

LFG!
