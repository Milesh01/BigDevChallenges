

function filterPosts(category) {
  var posts = document.getElementsByClassName('post');
  for (var i = 0; i < posts.length; i++) {
    if (category === 'all') {
      posts[i].style.display = 'block';
    } else {
      if (posts[i].classList.contains(category)) {
        posts[i].style.display = 'block';
      } else {
        posts[i].style.display = 'none';
      }
    }
  }
}


// _____________________________________
document.getElementById('searchIcon').addEventListener('click', function() {
  var searchContainer = document.getElementById('searchContainer');
  if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
    searchContainer.style.display = 'block';
  } else {
    searchContainer.style.display = 'none';
  }
});

document.getElementById('searchInput').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Filter and display search results
  var topics = ['Topic 1', 'Topic 2', 'Topic 3']; // Replace with your topics array
  topics.forEach(function(topic) {
    if (topic.toLowerCase().includes(searchTerm)) {
      var li = document.createElement('li');
      li.textContent = topic;
      searchResults.appendChild(li);
    }
  });
});

// Function to filter and show divs based on the input text
function filterDivs(inputText) {
  var allDivs = document.querySelectorAll('.lifestyle, .makeup, .fashion');
  allDivs.forEach(function(div) {
    if (div.classList.contains(inputText.toLowerCase())) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}

// Event listener for input events on the search input field
document.getElementById('searchInput').addEventListener('input', function() {
  var inputText = this.value.trim().toLowerCase();
  filterDivs(inputText);
});
