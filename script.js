// script.js

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const currentSection = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 50) - 1;
  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[currentSection].classList.add('active');
});

// Smooth scrolling for anchor links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: 'smooth'
    });
  });
});
