// https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/

(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
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
        ' found for &ldquo;' + searchTerm + '&rdquo;.';
    } else {
      document.getElementById('num-search-results').innerHTML = 'No results found';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');

      for (var key in window.store) { // Add the data to lunr
          this.add({
              'id': key,
              'title': window.store[key].title,
              'author': window.store[key].author,
              'category': window.store[key].category,
              'content': window.store[key].content
          });
      }
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    console.log(results);
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();
