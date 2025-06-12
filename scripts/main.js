function toggleDescription(card) {
    card.classList.toggle('active');
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinksA = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active')
    })
);


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