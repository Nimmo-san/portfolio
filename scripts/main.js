// Toggle a class on any element
const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);

// Toggle project description visibility
function toggleDescription(card) {
  toggleClass(card, 'active');
}

// Elements
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinksA = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  toggleClass(navToggle, 'active');
  toggleClass(navLinks, 'active');
});

// Close menu on nav link click
navLinksA.forEach(link =>
  link.addEventListener('click', () => {
    removeClass(navLinks, 'active');
    removeClass(navToggle, 'active');
  })
);

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinksA.forEach(link => {
    const target = link.getAttribute('data-target');
    link.classList.toggle('active', target === current);
  });
});
