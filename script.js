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

// Add smooth scrolling for page navigation if desired
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// This script handles form validation and submission feedback
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Basic validation can be added here if needed
            
            // Show loading state on button when form is submitted
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.style.opacity = '0.7';
            
            // Form submission is handled by Formspree
            // This will execute after form submission to Formspree
            setTimeout(function() {
                // Reset button after submission (whether success or failure)
                // Formspree will handle the actual redirect/response
                submitBtn.innerHTML = 'Send Message';
                submitBtn.style.opacity = '1';
            }, 3000);
        });
    }
});