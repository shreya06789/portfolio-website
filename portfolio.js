// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        const yOffset = -60; // Offset to adjust scroll position below the header
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});

// Toggle active class for navigation links based on the active section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('header').offsetHeight;

    let activeSection = null;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= headerHeight + 1) {
            activeSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const targetSectionId = link.getAttribute('href');
        if (targetSectionId === `#${activeSection.id}`) {
            link.classList.add('active');
        }
    });
});
