/* This is an example JavaScript file, feel free to remove/edit it anytime */
console.log(
  "%cMilesh",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");


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



// ============Active================
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.navigation li button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// ==========delete====================
document.querySelectorAll('.delete').forEach(function(deleteBtn) {
  deleteBtn.addEventListener('click', function() {
    var card = deleteBtn.closest('.post');
    card.style.display = 'none';
  });
});

// ============Image Checkbox===================

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  let isChecked = false;

  checkbox.addEventListener('click', function() {
    isChecked = !isChecked; // Toggle the checked state
    const img = isChecked ? 'assets/icons/checkbox-checked-icon.svg' : 'assets/icons/checkbox-icon.svg';
    checkbox.innerHTML = `<img src="${img}" alt="Checkbox">`;
  });
});



// =====================line-throgh
document.querySelectorAll('.inputcheckbox').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var card = checkbox.closest('.card');
    var title = card.querySelector('.title');
    var description = card.querySelector('.description');
    if (checkbox.checked) {
      title.classList.add('line-through');
      description.classList.add('line-through');
    } else {
      title.classList.remove('line-through');
      description.classList.remove('line-through');
    }
  });
});

document.querySelectorAll('.inputcheckbox').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var card = checkbox.closest('.card');
    var button = card.querySelector('.btn');
    if (checkbox.checked) {
      card.style.backgroundColor = 'transparent';
      button.style.backgroundColor = 'gray';
    } else {
      card.style.backgroundColor = '';
      button.style.backgroundColor = '';
    }
  });
});

