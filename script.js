const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  // Toggle the burger animation
  burger.classList.toggle('toggle');

  // Toggle the nav menu visibility
  nav.classList.toggle('nav-active');

  // Animate the nav links
  const navLinks = document.querySelectorAll('.nav-links li');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });
});
