/**
 * Muhammad Mubashir Tariq — Portfolio
 * Interactive Controller & Responsive Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Fullscreen Mobile Menu Controller
  // ------------------------------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const drawerCloseBtn = document.querySelector('.mobile-drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMenu() {
    if (!mobileDrawer) return;
    navToggle?.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('is-open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!mobileDrawer) return;
    navToggle?.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', openMenu);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on any navigation link
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeMenu();
      navToggle?.focus();
    }
  });

  // ------------------------------------------------------------------------
  // 2. Intersection Observer for Scroll Reveals
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('in'));
  }

  // ------------------------------------------------------------------------
  // 3. Active Nav Link Scrollspy
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('header.hero, section[id], footer[id]');
  const desktopNavLinks = document.querySelectorAll('.navlinks a');

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (!sectionId) return;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
});
