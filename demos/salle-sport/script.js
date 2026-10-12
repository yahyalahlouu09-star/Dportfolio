const form = document.querySelector('.booking-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nom = formData.get('nom') || 'Client';
    const objectif = formData.get('objectif') || 'fitness';
    const dispo = formData.get('dispo') || 'flexible';
    const message = `Bonjour Yahya, je souhaite m’inscrire à la salle de sport. Objectif : ${objectif}. Disponibilité : ${dispo}. Nom : ${nom}.`;
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(message)}`, '_blank');
  });
}

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.demo-nav nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '20px';
    nav.style.right = '20px';
    nav.style.background = 'rgba(14,14,16,0.96)';
    nav.style.padding = '14px';
    nav.style.border = '1px solid rgba(255,255,255,0.12)';
    nav.style.borderRadius = '18px';
    nav.style.flexDirection = 'column';
    nav.style.zIndex = '40';
  });
}
