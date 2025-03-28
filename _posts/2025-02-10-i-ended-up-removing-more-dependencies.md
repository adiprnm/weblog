---
layout: default
title: I ended up removing more dependencies
---

In the [previous post](/build-it-yourself), at the end of the post, I planned to remove more dependencies. I did it and ended up having 2 dependencies only.

## Removed the `oauth2` gem

The `oauth2` gem was initially installed to simplify the Google SSO authentication process. However, after reading the documentation, turned out that the flow was quite straightforward.

First, our app should generate the authorization URL that redirects to the select Google account page. Then, Google will redirect to the URL we've set before, along with the authorization code. The authentication code was used to retrieve the access token to access Google's OpenID Connect API. The response is then used by our application to complete the authentication process.

These processes are still doable by myself. So, I removed the gem and rolled out my own OAuth2 implementation.

## Removed the `meta-tags` gem

The `meta-tags` gem was used to set the meta tags. But since the meta tag was used only on the page that doesn't need authentication, adding a gem for it is unnecessary. Using the `content_for` tag and some view helpers, I could achieve the same result as the `meta-tags` gem. So, I removed it.

## Removed the `heroicon` gem

The `heroicon` gem was used to render the icon at the bottom navbar. But since the bottom navbar is the only component that needs the icon, adding the `heroicon` gem is overkill. The gem contains the icons that I don't need. Meanwhile, I need 5 icons only. Besides, unlike Font Awesome, Heroicon provides the XML file for each icon.

The other challenge was to apply the CSS class to the SVG tag. I dug into the `heroicon` and `inline_svg` gem to see how they did it, and turned out they used Nokogiri to manipulate the XML file. After a little research, I know that rendering the icon and apply the CSS class to it is doable by myself.

So, I removed the `heroicon` gem, downloaded those 5 icons and stored them in the `app/assets/images/heroicons` folder, adjusted the syntax, and added a view helper in `helpers/application_helper.rb` as follows:

```ruby
def icon(name, options)
  file = Nokogiri::XML.parse Rails.root.join("app/assets/images/heroicons/#{name}.svg")
  if options[:class].present?
    file.at_css("svg").add_class(options[:class])
  end
  file.to_html.html_safe
end
```

The code is only 7 lines long! Why I don't think about it in the first place? Lol.

## The final result

After removing those 3 gems, now my app has 2 external dependencies only:
- The `chartkick` gem to render the chart
- The `madmin` gem for the admin panel

It would take a lot of time if I were to write them from scratch. The time that would be spent could be used for other things, either improving the product, doing bug fixes, marketing, or even creating a new product.

So far, I'm happy with the result. I think the v1 of the project boilerplate is finished. Time to extract it to a standalone project.
