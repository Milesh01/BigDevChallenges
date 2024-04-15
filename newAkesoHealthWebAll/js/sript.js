// ============================
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor elements within the list
    const menuItems = document.querySelectorAll('#nav-bar li a');

    // Add click event listeners to each anchor element
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            menuItems.forEach(function(link) {
                link.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});

