// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typing', {
        strings: [
            "Full Stack MERN Developer",
            "Data Analyst",
            "Problem Solver"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = value + '%';
        });
    };
    
    // Intersection Observer for progress bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelector('.skills-section').querySelectorAll('.progress').forEach(el => {
        observer.observe(el);
    });
    
    // Project filtering
    const tabs = document.querySelectorAll('.project-tab-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('project-tab-active'));
            // Add active class to clicked tab
            tab.classList.add('project-tab-active');
            
            const filter = tab.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const backToTop = document.querySelector('.back-to-top');
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Service Worker Registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("Service Worker Registration Failed", err));
}