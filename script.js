// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Initialize the mobile navigation
navSlide();

// Remove the page load animation for corner icons since we're using CSS hover now
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add any other initialization code you need
    // But we've removed the corner icon animation since CSS handles it now
});

// Make sure the corner elements adjust when window is resized
window.addEventListener('resize', () => {
    // This can be used for additional responsive adjustments if needed
});

// Optional - Add smooth scrolling for page navigation if desired
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

