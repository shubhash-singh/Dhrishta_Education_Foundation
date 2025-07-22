document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality for directors
    const buttons = document.querySelectorAll('.read-more');
    const modal = document.getElementById('profileModal');
    const closeBtn = document.querySelector('.close-btn');
    
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modalImage.src = button.getAttribute('data-img');
            modalImage.alt = button.getAttribute('data-name');
            modalName.textContent = button.getAttribute('data-name');
            modalTitle.textContent = button.getAttribute('data-title');
            modalDescription.textContent = button.getAttribute('data-profile');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Staggered animation for director cards
    const directorCards = document.querySelectorAll('.director-card');
    
    const animateDirectorCards = function() {
        directorCards.forEach((card, index) => {
            const elementPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 200);
            }
        });
    };
    
    window.addEventListener('scroll', animateDirectorCards);
    setTimeout(animateDirectorCards, 100);
});