// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

if(mobileMenu && navLinks){
    mobileMenu.addEventListener('click', ()=>{
        menuOpen = !menuOpen;
        navLinks.style.display = menuOpen ? 'flex' : 'none';
        mobileMenu.textContent = menuOpen ? '✕' : '☰';
    });
}

// Intersection observer for animations (fade in + timeline)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
},{ threshold:0.1 });

document.querySelectorAll('.card, .timeline-item, .hero-card, .skills-list li').forEach(el=>{
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});
