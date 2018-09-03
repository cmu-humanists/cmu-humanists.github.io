---
layout: page
title: Speakers
excerpt: "The speakers events we have held."
show_logo: true
search_omit: true
---

<ul class="post-list">
  {% for post in site.categories.speakers %}
    {% include post-listing.html %}
  {% endfor %}
</ul>
