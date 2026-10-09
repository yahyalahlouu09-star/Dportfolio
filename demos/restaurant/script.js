const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('mobile-open');
  });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    menuItems.forEach((item) => {
      const shouldShow = !target || item.dataset.category === target;
      item.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const galleryButtons = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.dataset.image;
    if (!image || !lightbox || !lightboxImage) return;

    lightboxImage.src = image;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

lightboxClose?.addEventListener('click', () => {
  lightbox?.classList.remove('open');
  lightbox?.setAttribute('aria-hidden', 'true');
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

const testimonials = [...document.querySelectorAll('.testimonial')];
let activeIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

document.querySelector('.slider-btn.prev')?.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(activeIndex);
});

document.querySelector('.slider-btn.next')?.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % testimonials.length;
  showTestimonial(activeIndex);
});

setInterval(() => {
  if (testimonials.length > 1) {
    activeIndex = (activeIndex + 1) % testimonials.length;
    showTestimonial(activeIndex);
  }
}, 5000);
