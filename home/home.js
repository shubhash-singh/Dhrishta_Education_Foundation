document.addEventListener('DOMContentLoaded', function() {
    
    // Image slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe highlight cards
    document.querySelectorAll('.highlight').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(el);
    });
    
    // Notification item interactions
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('strong').textContent;
            console.log('Clicked:', text);
            // Add navigation logic here
        });
    });
    
    // Mobile menu toggle (basic implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn?.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    // Animate mission highlights on scroll
    window.addEventListener('scroll', animateHighlights);
    setTimeout(animateHighlights, 100);
    
    // Animate notification items on scroll
    const notificationItems = document.querySelectorAll('.notification-item');
    
    const animateNotifications = function() {
        notificationItems.forEach((item, index) => {
            const elementPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };
    
    // Set initial state for notification items
    notificationItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        // Add click event to redirect to gallery
        item.addEventListener('click', function() {
            const notificationText = this.querySelector('.notification-text strong').textContent;
            let targetSection = '';
            
            // Map notification types to gallery sections
            if (notificationText.includes('Research Grant')) {
                targetSection = '#research-grants';
            } else if (notificationText.includes('Faculty Development') || notificationText.includes('Training')) {
                targetSection = '#training-programs';
            } else if (notificationText.includes('Community Health')) {
                targetSection = '#community-health';
            } else if (notificationText.includes('Technology Partnership')) {
                targetSection = '#technology-partnerships';
            } else if (notificationText.includes('Research Publication')) {
                targetSection = '#research-publications';
            } else if (notificationText.includes('Student Achievement')) {
                targetSection = '#student-achievements';
            }
            
            // Redirect to gallery page with specific section
            if (targetSection) {
                window.location.href = `gallery/gallery.html${targetSection}`;
            }
        });
        
        // Add hover effect to indicate clickability
        item.style.cursor = 'pointer';
    });
    
    window.addEventListener('scroll', animateNotifications);
    setTimeout(animateNotifications, 500);
});