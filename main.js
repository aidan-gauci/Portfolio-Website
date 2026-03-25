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

// Interactive Skills Descriptions
function isHovering(elementList) {
  elementList.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('is-hovered');
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove('is-hovered');
    });
  });
}

const skills = document.querySelectorAll('.skill-element-container');
isHovering(skills);

// Education Image Overlay
const education = document.querySelectorAll('.education-article');
isHovering(education);

// Project Image Overlay
const projects = document.querySelectorAll('.project-article');
isHovering(projects);

// Interactive Contact Buttons
const contacts = document.querySelectorAll('.contact-link');
isHovering(contacts);
