// Active Scroll Section Emphasis
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const headerHeight = document.querySelector('header').offsetHeight;

const observerOptions = {
  root: null,
  rootMargin: `-${headerHeight}px 0px -90% 0px`,
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// Project Image Overlay
const articles = document.querySelectorAll('.project-article');

articles.forEach((article) => {
  article.addEventListener('mouseenter', () => {
    article.classList.add('is-hovered');
  });

  article.addEventListener('mouseleave', () => {
    article.classList.remove('is-hovered');
  });
});
