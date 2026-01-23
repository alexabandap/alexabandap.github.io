// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
});

// Mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        menuOpen = !menuOpen;
        navLinks.style.display = menuOpen ? 'flex' : 'none';
        mobileMenu.innerHTML = menuOpen ? '✕' : '☰';
    });
}
