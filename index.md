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
<a href="http://eepurl.com/D695H" class="btn">Suscribe to our weekly meetings email list!</a>
</div>

<a href="https://www.google.com/url?q=https://cmu.zoom.us/j/97801944405?pwd%3DMVFMZS9jN3Z6a1ZTbEpwcDhOSks4dz09&sa=D&source=calendar&usd=2&usg=AOvVaw0yhT8lNKKtg_gfSZvnzLw5">Attend Sagan Day: Daryl Davis on Zoom</a>
<a href="https://youtu.be/6PD8H-gjkcQ"> Watch Sagan Day: Daryl Davis on YouTube</a>

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
