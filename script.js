// Shared JavaScript across all pages
console.log('DataVoyager Explorer loaded');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle page transitions
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});