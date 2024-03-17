    // Get the button element
    const soldOutButton = document.getElementById('soldOut');

    // Add click event listener to the button
    soldOutButton.addEventListener('click', function() {
        // Remove the ticket icon
        soldOutButton.innerHTML = soldOutButton.innerHTML.replace('<i class="bi bi-cash"></i>', '');

        // Change the button text to "Sold Out"
        soldOutButton.textContent = 'Sold Out!';
        soldOutButton.style.backgroundColor = 'transparent';
    });