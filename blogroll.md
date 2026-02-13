---
layout: default
title: Blogroll
---

{% for blogroll in site.data.blogrolls %}
  {% if blogroll.image %}

![{{ blogroll.name }}]({{ blogroll.image }}){: class="profile-photo profile-photo--md no-horizontal-margin mb-2 mt-8" }
**[{{ blogroll.name }}]({{ blogroll.website }}){: target="_blank" class="no-text-decoration sans-serif" }**<br>
{{ blogroll.description }}

  {% else %}

<p>
    <span class="profile-photo profile-photo--md profile-photo--initials no-horizontal-margin mb-2 mt-8">{{ blogroll.name | slice: 0, 2 }}</span>
    <strong><a href="{{ blogroll.website }}" class="no-text-decoration sans-serif">{{ blogroll.name }}</a></strong><br>

    {{ blogroll.description }}
</p>

  {% endif %}
{% endfor %}
