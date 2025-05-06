// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.site-nav');
  btn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Smooth scroll for in‑page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      nav.classList.remove('active');
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
