document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle the 'active' class on the menu when the burger is clicked
    burgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
