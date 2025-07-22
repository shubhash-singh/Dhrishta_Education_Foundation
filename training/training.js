document.addEventListener('DOMContentLoaded', function() {
    // Animate training cards with staggered effect
    const trainingCards = document.querySelectorAll('.training-card');
    
    const animateTrainingCards = function() {
        trainingCards.forEach((card, index) => {
            const elementPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 200);
            }
        });
    };
    
    // Animate approach sections
    const approachSections = document.querySelectorAll('.approach-section');
    
    const animateApproachSections = function() {
        approachSections.forEach((section, index) => {
            const elementPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    section.classList.add('animate-in');
                }, index * 300);
            }
        });
    };
    
    // Animate introduction details
    const introDetails = document.querySelectorAll('.training-introduction-detail');
    
    const animateIntroDetails = function() {
        introDetails.forEach((detail, index) => {
            const elementPosition = detail.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    detail.classList.add('animate-in');
                }, index * 300);
            }
        });
    };
    
    // Add scroll event listeners
    window.addEventListener('scroll', animateTrainingCards);
    window.addEventListener('scroll', animateApproachSections);
    window.addEventListener('scroll', animateIntroDetails);
    
    // Run animations on page load
    setTimeout(() => {
        animateIntroDetails();
        animateTrainingCards();
        animateApproachSections();
    }, 100);
    
    // Add hover effects for training cards
    trainingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});