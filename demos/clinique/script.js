const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('mobile-open');
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
