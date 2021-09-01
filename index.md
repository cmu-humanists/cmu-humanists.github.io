---
layout: page
title: Home
headline: ""
show_logo: true
show_description: true
animate: true
search_omit: true
---

**Discussion meetings in Wean Hall 5310 on Wednesday at 4:30pm.**
(This is a change from what was previously announced, due to some logistical difficulties).
To hear about the topics of our weekly meetings,
[subscribe to our weekly meetings email list!](http://eepurl.com/D695H)
To see potential future topics and suggest new ones, [check out this form](https://docs.google.com/forms/d/e/1FAIpQLSf53QEZMiuKBpDanz_JOqM6LzdFOwr3XV-B7Or34mzfEZl8Ow/viewform).


The CMU Humanist League holds weekly discussion meetings, on a variety of topics which are chosen to promote deep yet positive conversations.
All CMU students, faculty, and community members are invited!
New members are always enthusiastically welcome.
Our first weekly meeting will be on September 1st.
You can also check out some of [our previous topics](discussions.md).


We invite speakers to talk about topics of importance to humanity and our shared well-being.
We have events several times a semester, which are open to absolutely everyone!
We'll post about them here, or you can join [our events mailing list](http://eepurl.com/dLsc7A) to just hear about our speaker events.
The weekly meetings list will also hear about the speaker events.
You can also check out some of [our previous speakers](speakers.md).

You can learn about our mission and meet our exec board [over here](about.md).

For anything else, you can send us an email at cmu dot humanists@gmail dot com (Sorry for the indirection, spam is annoying).

<!--- <div class='center-btns'>
<a href="https://youtu.be/Jp_lbRLKX1U"> Watch Sagan Day: Daryl Davis on YouTube</a>
# </div>

<div class='center-btns'>
<a href="http://eepurl.com/D695H" class="btn">Suscribe to our weekly meetings email list!</a>
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
<!--- Check back on Monday for Wednesday's discussion topic! --- >
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
--->
