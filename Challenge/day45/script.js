const menuItems = document.querySelectorAll('ul.d-flex li');

// Har ek list item par loop lagao
menuItems.forEach(item => {
  // Click event listener lagao
  item.addEventListener('click', function() {
    // Sabhi list items se 'active' class hatao
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    // Clicked list item par 'active' class lagao
    this.classList.add('active');
  });
});
