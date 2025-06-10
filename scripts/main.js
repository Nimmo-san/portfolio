function toggleDescription(card) {
    card.classList.toggle('active');
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    })
);