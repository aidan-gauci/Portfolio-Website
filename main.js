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

// Education Image Overlay
const education = document.querySelectorAll('.education-article');

education.forEach((place) => {
  place.addEventListener('mouseenter', () => {
    place.classList.add('is-hovered');
  });

  place.addEventListener('mouseleave', () => {
    place.classList.remove('is-hovered');
  });
});

// Project Image Overlay
const projects = document.querySelectorAll('.project-article');

projects.forEach((project) => {
  project.addEventListener('mouseenter', () => {
    project.classList.add('is-hovered');
  });

  project.addEventListener('mouseleave', () => {
    project.classList.remove('is-hovered');
  });
});
