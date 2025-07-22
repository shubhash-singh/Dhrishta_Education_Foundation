document.addEventListener('DOMContentLoaded', function() {
    // Navbar hide/show on scroll
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    const navbarHeight = navbar.offsetHeight;
    
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Determine scroll direction
        if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
            // Scrolling down - hide navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('navbar-hidden');
        }
        
        // Add shadow and compact style when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    
    // Mobile Menu Toggle
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.innerHTML = '☰';
                }
            }
        });
    });
    
    // Enhanced animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.stats-item, .section-title, .animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-in');
            }
        });
    };
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    setTimeout(animateOnScroll, 100);
});