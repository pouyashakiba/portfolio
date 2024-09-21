document.addEventListener('DOMContentLoaded', () => {
    // Get all cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card');
    let activeCard = null; // Store the active (expanded) card

    // Expand Cards when clicked
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove('expanded');
                activeCard.style.transform = 'scale(1)';
                activeCard.style.zIndex = 0;
            }

            if (!card.classList.contains('expanded')) {
                card.classList.add('expanded');
                activeCard = card;
                card.style.transform = 'scale(1.3)';
                card.style.zIndex = 1;
            } else {
                card.classList.remove('expanded');
                card.style.transform = 'scale(1)';
                card.style.zIndex = 0;
                activeCard = null;
            }
        });
    });

    // Drop-down menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
