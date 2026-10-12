const form = document.querySelector('.booking-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const nom = formData.get('nom') || 'Client';
    const prestation = formData.get('prestation') || 'soin';
    const date = formData.get('date') || 'aujourd\'hui';
    const heure = formData.get('heure') || '10:00';
    const message = `Bonjour Yahya, je souhaite réserver une prestation de ${prestation} le ${date} à ${heure}. Nom : ${nom}.`;
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
    nav.style.background = 'rgba(255,255,255,0.95)';
    nav.style.padding = '14px';
    nav.style.border = '1px solid rgba(58,35,40,0.12)';
    nav.style.borderRadius = '18px';
    nav.style.flexDirection = 'column';
  });
}
