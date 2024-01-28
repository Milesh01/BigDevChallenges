document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.querySelector('.nav-bar');
  const toggleBtn = document.getElementById('toggle-btn');

  toggleBtn.addEventListener('click', function () {
    navBar.classList.toggle('show');
  });
});
