document.addEventListener('DOMContentLoaded', () => {
    const viewWorkButton = document.querySelector('.view-work-btn');
    
    if (viewWorkButton) {
        viewWorkButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

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