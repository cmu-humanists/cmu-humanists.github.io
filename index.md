---
layout: page
title: Home
headline: ""
show_logo: true
show_description: true
animate: true
search_omit: true
---
<div class='center-btns'>
<a href="https://cmu.zoom.us/j/97801944405?pwd=MVFMZS9jN3Z6a1ZTbEpwcDhOSks4dz09">Attend Sagan Day: Daryl Davis on Zoom</a>
</div>

<div class='center-btns'>
<a href="https://youtu.be/Jp_lbRLKX1U"> Watch Sagan Day: Daryl Davis on YouTube</a>
</div>

<h1 class="entry-title">Upcoming Events</h1>

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{% assign any-upcoming = false %}
<ul class="post-list">
  {% for post in site.posts %}
    {% capture posttime %}{{ post.date | date: '%s' }}{% endcapture %}
    {% if posttime >= nowunix %}
      {% assign any-upcoming = true %}
      {% include post-listing.html category-tag="true" %}
    {% endif %}
  {% endfor %}
  {% if any-upcoming == false %}
  <li><article>
    <div class="entry-header">
      <div class="title">
Thanks for a great year! Check back in the fall for next semester's discussions and events! 
<!--- Check back on Monday for Wednesday's discussion topic! --->
      </div>
    </div>
  </article>
  </li>
  {% endif %}
</ul>

<h1 class="entry-title">Past Events</h1>

<ul class="post-list">
  {% for post in site.posts limit: 6 %}
    {% capture posttime %}{{ post.date | date: '%s' }}{% endcapture %}
    {% if posttime < nowunix %}
      {% include post-listing.html category-tag="true" %}
    {% endif %}
  {% endfor %}
</ul>
