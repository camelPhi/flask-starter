document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    var menuItems = document.querySelector('.menu-items');

    hamburgerIcon.addEventListener('click', function() {
        var menuItems = document.querySelector('.menu-items');
        if (menuItems.style.display == 'none') {
            menuItems.style.display = 'block';
        }
        else {
            menuItems.style.display = 'none';
        }
    });
});
