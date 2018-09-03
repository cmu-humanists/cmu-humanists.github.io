# Carnegie Mellon University Humanist League Website

[Check it out!](http://cmuhl.org)

This is the repository for the content of the Carnegie Mellon University
Humanist League Website. We use jekyll to build the static website using our
[own gem based
theme](https://github.com/cmu-humanists/jekyll-theme-cmu-humanists).

## Making a post using Github's web interface
To add a new post to the website using Github's web interface (you must be
signed into the cmu-humanists github account):

- Click the `_posts` folder
- Click either the `discussions` or `speakers` folder to make the corresponding
  type of post
- Click `Create new file`
- Name the file with the format `yyyy-mm-dd-post-name.md` (use all lower case
  with no spaces)
- You can copy the text in the `_template.md_` file as a starting point or look
  at another post for reference.
  - Note that by default github renders markdown files so you won't see the
    actual text of the file, to do so click the `Raw` button then you can copy
    that text.
- Once you've made the post click the `Commit new file` button at the bottom.
- After a few minutes your new post should be visible on the website!


## Editing the website locally

Clone the repository:

    $ git clone https://github.com/cmu-humanists/cmu-humanists.github.io.git

Create new posts by following the template and previous posts as examples in
either the `_posts/discussions` or `posts/speakers` folder.

You can preview the website locally if you have ruby installed by running

    $ bundle exec jekyll serve

Then going to http://127.0.0.1:4000. If `bundle` isn't installed then you can do
so by running 

    $ gem install bundler
    

Once you're done commit the changes:

    $ git commit -am "update website"
    
Then push the changes

    $ git push
    
Github will automatically start the jekyll build of the website and your changes
should be viewable in a few minutes.
