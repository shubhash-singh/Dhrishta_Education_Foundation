document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("GhJc_wDLWZWLjuKut"); // EmailJS Public Key

    // Form handling
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('.cta-button');
    
    // Form validation
    function validateForm() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Clear previous error states
        [name, email, subject, message].forEach(field => {
            field.classList.remove('error', 'success');
        });
        
        // Validate name
        if (name.value.trim().length < 2) {
            name.classList.add('error');
            isValid = false;
        } else {
            name.classList.add('success');
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            isValid = false;
        } else {
            email.classList.add('success');
        }
        
        // Validate subject
        if (subject.value.trim().length < 3) {
            subject.classList.add('error');
            isValid = false;
        } else {
            subject.classList.add('success');
        }
        
        // Validate message
        if (message.value.trim().length < 10) {
            message.classList.add('error');
            isValid = false;
        } else {
            message.classList.add('success');
        }
        
        return isValid;
    }
    
    // Show success message
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.display = 'block';
        successDiv.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
        
        contactForm.insertBefore(successDiv, contactForm.firstChild);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // Show error message
    function showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.display = 'block';
        errorDiv.style.backgroundColor = '#f8d7da';
        errorDiv.style.color = '#721c24';
        errorDiv.style.padding = '1rem';
        errorDiv.style.borderRadius = '8px';
        errorDiv.style.marginBottom = '1rem';
        errorDiv.textContent = message || 'Sorry, there was an error sending your message. Please try again later.';
        
        contactForm.insertBefore(errorDiv, contactForm.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            showErrorMessage('Please fill in all fields correctly.');
            return;
        }
        
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        try {
            // Send email using EmailJS
            const response = await emailjs.send("service_mxwwcdn", "template_3puz5o9", formData);
            console.log("Email sent successfully!", response);
            
            showSuccessMessage();
            contactForm.reset();
            
            // Clear validation classes
            [document.getElementById('name'), document.getElementById('email'), 
             document.getElementById('subject'), document.getElementById('message')].forEach(field => {
                field.classList.remove('error', 'success');
            });
            
        } catch (error) {
            console.error("Error sending email:", error);
            showErrorMessage();
        } finally {
            // Reset button state
            submitButton.classList.remove('loading');
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }
    });
    
    // Real-time validation
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('blur', validateForm);
        field.addEventListener('input', function() {
            // Clear error state on input
            this.classList.remove('error');
        });
    });
    
    // Animate involved cards
    const involvedCards = document.querySelectorAll('.involved-card');
    
    const animateInvolvedCards = function() {
        involvedCards.forEach((card, index) => {
            const elementPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 150);
            }
        });
    };
    
    window.addEventListener('scroll', animateInvolvedCards);
    setTimeout(animateInvolvedCards, 500);
    
    // Smooth scroll for CTA button
    document.querySelector('.cta-center .cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contactForm').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});