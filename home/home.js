document.addEventListener('DOMContentLoaded', function() {
    // Background Image Slider
    const heroSection = document.querySelector('.hero');
    const backgroundImages = [
        '../assets/images/atudents_outside.jpg',
        '../assets/images/class_from_behind.jpg',
        '../assets/images/class_students_only.jpg',
        '../assets/images/lab_with_student.jpg'
    ];
    
    let currentImageIndex = 0;
    
    // Set initial background
    heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    
    // Auto change background
    function changeBackground() {
        
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        heroSection.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    }
    
    // Change background every 5 seconds
    setInterval(changeBackground, 8000);
    
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