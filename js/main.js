/* ================= SCROLL SUAVE PARA ÂNCORAS ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ================= FUNÇÃO PARA REVELAR ELEMENTOS ================= */
function revealElement(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.getBoundingClientRect(); 
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
}

/* ================= ANIMAÇÃO AO CARREGAR A PÁGINA ================= */
document.addEventListener('DOMContentLoaded', () => {
    const initialReveal = document.querySelectorAll(
        '.hero-text, .hero-image, .skills, .cta-projects, .contact, .projects-blog-section, .blog-section'
    );

    initialReveal.forEach(el => revealElement(el));
});

/* ================= SCROLL REVEAL ================= */
const scrollRevealElements = document.querySelectorAll(
    '.hero-text, .hero-image, .skills, .cta-projects, .contact, .projects-blog-section, .blog-section'
);

const revealOnScroll = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.15 }
);

scrollRevealElements.forEach(el => revealOnScroll.observe(el));

/* ================= CARROSSEL INFINITO DE SKILLS ================= */
const carousel = document.querySelector('.skills-carousel');
if (carousel) {
    const items = Array.from(carousel.children);
    items.forEach(item => carousel.appendChild(item.cloneNode(true)));

    let scrollSpeed = 0.2;
    let currentScroll = 0;
    let isPaused = false;

    function infiniteScroll() {
        if (!isPaused) {
            currentScroll += scrollSpeed;
            carousel.scrollLeft = Math.floor(currentScroll);
            if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0;
                currentScroll = 0;
            }
        }
        requestAnimationFrame(infiniteScroll);
    }

    infiniteScroll();

    carousel.addEventListener('mouseenter', () => isPaused = true);
    carousel.addEventListener('mouseleave', () => isPaused = false);
}
