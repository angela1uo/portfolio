document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for the "View my work" button
    const viewWorkButton = document.querySelector('.view-work-btn');
    
    // Check if the button exists before adding the listener
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents the default jump behavior
            const targetId = this.getAttribute('href'); // Gets the target: #projects-grid
            
            // Scroll smoothly to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 2. Intersection Observer for Scroll Reveal Effect (Cards)
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
});