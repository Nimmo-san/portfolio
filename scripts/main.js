// Toggle a class on any element
const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);

// Toggle project description visibility
function toggleDescription(clickedCard) {
  const allCards = document.querySelectorAll('.project-card');

  allCards.forEach(card => {
    const desc = card.querySelector('.description');
    const icon = card.querySelector('.toggle-icon');

    if (card === clickedCard) {
      const isOpen = card.classList.contains('active');
      toggleClass(card, 'active')
      desc.style.maxHeight = isOpen ? null : desc.scrollHeight + "px";
      if (icon) icon.classList.toggle('rotated', !isOpen);
    } else {
      removeClass(card, 'active')
      card.querySelector('.description').style.maxHeight = null;
      if (card.querySelector('.toggle-icon')) {
        card.querySelector('.toggle-icon').classList.remove('rotated');
      }
    }
  });
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
