// https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/
// https://www.integralist.co.uk/posts/static-search-with-lunr/

var lunrIndex, results;

function initLunr() {
  lunrIndex = lunr(function () {
    this.ref('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('category');
    this.field('content');

    for (var key in window.store) {
      this.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });
    }
  });
}

function search() {
  var query = document.getElementById('search-box').value;

  document.getElementById("search-results").innerHTML = null;
  document.getElementById("num-search-results").innerHTML = null;

  if (query.length < 2) {
    return;
  }
  if (!(query.indexOf(' ') >= 0)) {query += '*';} // to get prefix matches

  var results = lunrIndex.search(query);
  //console.log(results);
  displaySearchResults(results, window.store);
}

function displaySearchResults(results, store) {
  var searchResults = document.getElementById('search-results');
  var query = document.getElementById('search-box').value;

  if (results.length) {
    var appendString = '';

    for (var i = 0; i < results.length; i++) {
      var item = store[results[i].ref];
      appendString += '<li><article><a href="' + item.url + '">' + item.title;
      appendString += '<div class="excerpt">' + item.content.substring(0, 150);
      appendString += '&#8230;</div></a></article></li>';
    }

    searchResults.innerHTML = appendString;

    var nResults = '';
    if (results.length == 1) {
      nResults = '1 result';
    } else {
      nResults = results.length + ' results';
    }
    document.getElementById('num-search-results').innerHTML = nResults +
      ' for &ldquo;' + query + '&rdquo;';
  } else {
    document.getElementById('num-search-results').innerHTML = 'No results found';
  }
}


initLunr();
