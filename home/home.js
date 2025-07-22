document.addEventListener('DOMContentLoaded', function() {
    // Image Slider Functionality
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    // Auto slide functionality
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        showSlide(currentSlideIndex);
    }
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    

    // Auto-play slider every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Pause auto-play on hover
    const slider = document.querySelector('.hero-slider');
    let autoPlayInterval = setInterval(nextSlide, 5000);
    
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });
    
    // Parallax effect for hero background
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrollPosition < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollPosition * parallaxSpeed * 0.3}px)`;
            }
        });
    }
    
    // Animate mission highlights on scroll
    const highlights = document.querySelectorAll('.highlight');
    
    const animateHighlights = function() {
        highlights.forEach((highlight, index) => {
            const elementPosition = highlight.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    highlight.style.opacity = '1';
                    highlight.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    };
    
    // Set initial state for highlights
    highlights.forEach(highlight => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateY(30px)';
        highlight.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
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
    });
    
    window.addEventListener('scroll', animateNotifications);
    setTimeout(animateNotifications, 500);
});