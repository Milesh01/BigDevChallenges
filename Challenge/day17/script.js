document.addEventListener("DOMContentLoaded", function() {
    const masterCheckbox = document.getElementById("masterCheckbox");
    const slaveCheckboxes = document.querySelectorAll(".slaveCheckbox");

    masterCheckbox.addEventListener("change", function() {
        if (masterCheckbox.checked) {
            // Check all slave checkboxes
            slaveCheckboxes.forEach(function(checkbox) {
                checkbox.checked = true;
                checkbox.parentNode.style.backgroundColor = 'gray'; // Set background color to gray
            });
        } else {
            // Uncheck all slave checkboxes
            slaveCheckboxes.forEach(function(checkbox) {
                checkbox.checked = false;
                checkbox.parentNode.style.backgroundColor = ''; // Remove background color
            });
        }
    });

    // Add event listeners to slave checkboxes for changing background color
    slaveCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                checkbox.style.backgroundColor = 'gray'; // Set background color to gray
            } else {
                checkbox.style.backgroundColor = ''; // Remove background color
            }
        });
    });
});




// =======================

function filterPosts(category) {
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        if (category === 'All' || post.classList.contains(category)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}