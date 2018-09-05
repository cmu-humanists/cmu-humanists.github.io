---
layout: page
title: Discussion Topics
excerpt: "All our weekly meeting discussion topics and blurbs."
show_logo: true
search_omit: true
---

<div class='center-btns'>
{% capture nowyear %}{{'now' | date: '%Y'}}{% endcapture %}
{% assign postsByYear = site.categories.discussions | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%m'" %}
  {% assign fallPosts = "" | split: ',' %}
  {% assign springPosts = "" | split: ',' %}
  {% for month in postsByMonth %}
    {% assign monthInt = month.name | plus: 0 %}
    {% if monthInt <= 6 %}
      {% assign springPosts = springPosts | concat: month.items %}
    {% else %}
      {% assign fallPosts = fallPosts | concat: month.items %}
    {% endif %}
  {% endfor %}
  {% if fallPosts.size != 0 %}
      <label for='cp-f{{ year.name }}' class="btn">Fall {{ year.name }}</label>
      {% if year.name == nowyear %}
        <input type='radio' name='a' id='cp-f{{ year.name }}' checked='checked'>
      {% else %}
        <input type='radio' name='a' id='cp-f{{ year.name }}'>
      {% endif %}
      <ul class="post-list">
        {% for post in fallPosts %}
          {% include post-listing.html %}
        {% endfor %}
      </ul>
  {% endif %}
  {% if springPosts.size != 0 %}
      <label for='cp-s{{ year.name }}' class="btn">Spring {{ year.name }}</label>
      {% if year.name == nowyear and fallPosts.size == 0 %}
        <input type='radio' name='a' id='cp-s{{ year.name }}' checked='checked'>
      {% else %}
        <input type='radio' name='a' id='cp-s{{ year.name }}'>
      {% endif %}
      <ul class="post-list">
        {% for post in springPosts %}
          {% include post-listing.html %}
        {% endfor %}
      </ul>
  {% endif %}
{% endfor %}
</div>
