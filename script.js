// Listen for the scroll event
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    // If user scrolls past 50px, add 'scrolled' class; otherwise remove it
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});