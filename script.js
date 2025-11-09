
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');

    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll behavior for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Navigate to About section on click 
document.getElementById('intro').addEventListener('click', navigateToAbout); 
document.getElementById('neon').addEventListener('click', navigateToAbout); 

function navigateToAbout() {
     document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

