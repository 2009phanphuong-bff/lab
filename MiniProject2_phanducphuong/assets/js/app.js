// MOBILE MENU
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

toggle.onclick = () => {
  menu.classList.toggle('show');
};

// GSAP HERO
gsap.from('.hero-title', {
  y: 50,
  opacity: 0,
  duration: 1
});

// AOS
AOS.init({
  duration: 1000
});

// SWIPER
new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// FORM
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', e => {
  e.preventDefault();
  toast.style.display = 'block';
  localStorage.setItem('contact', 'submitted');
});
