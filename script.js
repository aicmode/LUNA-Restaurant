document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.currentTarget.dataset.scroll;
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const navLinks = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle?.addEventListener('click', () => {
  if (!navLinks) return;
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 720 && navLinks) {
    navLinks.style.display = 'flex';
  }
});
