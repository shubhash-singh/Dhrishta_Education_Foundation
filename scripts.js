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
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile Menu Toggle
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button if it doesn't exist
    if (!document.querySelector('.mobile-menu-btn')) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        navbar.querySelector('.container').appendChild(mobileMenuBtn);
        
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
                document.querySelector('.mobile-menu-btn').innerHTML = '☰';
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Enhanced animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.highlight, .director-card, .work-area, .impact-card, .involved-card, .section-title, .stats-item');
        
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
    
    // Parallax effect for background sections
    const parallaxSections = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', function() {
        parallaxSections.forEach(section => {
            const scrollPosition = window.pageYOffset;
            const sectionTop = section.offsetTop;
            const distance = scrollPosition - sectionTop;
            
            if (Math.abs(distance) < window.innerHeight) {
                section.style.backgroundPositionY = `${distance * 0.4}px`;
            }
        });
    });
});