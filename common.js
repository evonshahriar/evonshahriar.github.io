document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Add the toggle functionality for the menu
            const menuToggle = document.getElementById('menu-toggle');
            const navbar = document.getElementById('navbar');

            menuToggle.addEventListener('click', function() {
                navbar.classList.toggle('show');
            });
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
