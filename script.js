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

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll(
  '.section, .section-header, .section-copy, .feature-card, .menu-card, .chef-image, .gallery-card, .experience-card, .testimonial-card, .reservation-panel, .location-details'
);

revealTargets.forEach((element, index) => {
  element.classList.add('reveal-on-scroll');
  const groupIndex = index % 4;
  element.style.setProperty('--reveal-delay', `${groupIndex * 90}ms`);
});

const showRevealTargets = () => {
  revealTargets.forEach((element) => {
    element.classList.add('is-visible');
  });
};

if (motionQuery.matches || !('IntersectionObserver' in window)) {
  showRevealTargets();
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealTargets.forEach((element) => {
    revealObserver.observe(element);
  });
}
