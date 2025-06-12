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

const sections = document.querySelectorAll('section[id]');
const navLinksA = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksA.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === current) {
            link.classList.add('active');
        }
    })
});