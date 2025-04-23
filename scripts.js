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
    
    // Enhanced animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.highlight, .director-card, .research-area, .research-impact-card, .involved-card, .section-title, .stats-item');
        
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

// pop up Model for Directors
const buttons = document.querySelectorAll('.read-more');
const modal = document.getElementById('profileModal');
const closeBtn = document.querySelector('.close-btn');

const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalProfile = document.getElementById('modalProfile');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modalImage.src = button.getAttribute('data-img');
        modalImage.alt = button.getAttribute('data-name');
        modalName.textContent = button.getAttribute('data-name');
        modalTitle.textContent = button.getAttribute('data-title');
        modalDescription.textContent = button.getAttribute('data-profile');
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.style.display = 'none';
}
});

// Research Data
const researchData = [
{
    title: "Educational Research Initiatives",
    shortItems: [
        "Research center setup",
        "Innovative teaching methods",
        "Longitudinal studies",
        "Global research networks"
    ],
    details: [
    {
        heading: "Research Institute Development",
        text: "Establishing specialized research centers focused on learning sciences, educational technology, curriculum innovation, and pedagogical advancement."
    },
    {
        heading: "Evidence-Based Training Programs",
        text: "Developing and testing innovative instructional methodologies through experimental workshops, longitudinal studies, and comparative educational research."
    },
    {
        heading: "Research Network Expansion",
        text: "Creating collaborative research hubs and knowledge exchange platforms across India and internationally to accelerate educational innovation."
    }
    ]
},
{
    title: "Healthcare Research Projects",
    shortItems: [
        "Clinical labs",
        "Population studies",
        "Indigenous solutions",
        "Rural health models"
    ],
    details: [
    {
        heading: "Clinical Research Infrastructure",
        text: "Developing research hospitals, biomedical laboratories, and clinical trial facilities focused on investigating indigenous healthcare solutions."
    },
    {
        heading: "Population Health Studies",
        text: "Conducting epidemiological research, community health assessments, and healthcare delivery models with particular focus on underserved populations."
    }
    ]
},
{
    title: "Advanced Research & Development",
    shortItems: [
        "Interdisciplinary research",
        "Policy analysis",
        "Research conferences", 
        "Innovation forums"
    ],
    details: [
    {
        heading: "Interdisciplinary Investigations",
        text: "Pursuing cross-sectoral research that bridges traditional disciplines with emerging fields to address complex societal challenges."
    },
    {
        heading: "Policy Research",
        text: "Conducting rigorous analysis of governance structures, market mechanisms, and regulatory frameworks to inform evidence-based policy recommendations."
    },
    {
        heading: "Knowledge Dissemination",
        text: "Organizing research symposia, scientific conferences, and academic forums to stimulate intellectual exchange and research collaboration."
        }
    ]
},
    {
        title: "Community-Based Research",
        shortItems: [
            "Action research",
            "Community surveys", 
            "Impact evaluation",
            "Grassroots innovation"
        ],
        details: [
        {
            heading: "Action Research Models",
            text: "Implementing iterative research cycles that combine investigation with intervention to address pressing community issues."
        },
        {
            heading: "Impact Assessment Studies",
            text: "Conducting systematic evaluations of development initiatives using mixed-methods research approaches to measure outcomes and refine interventions."
        }
        ]     
    }
];
  
// Pop up Model for Research
const researchModal = document.getElementById("researchModal");
const researchModalTitle = document.getElementById("research-modalTitle");
const researchModalBody = document.getElementById("research-modalBody");
const researchCloseBtn = document.querySelector(".research-close-btn");

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".research-grid");

    researchData.forEach(item => {
        const areaDiv = document.createElement("div");
        areaDiv.classList.add("research-area");
        areaDiv.setAttribute("data-title", item.title);
        areaDiv.setAttribute("data-description", JSON.stringify(item.details));

        const heading = document.createElement("h3");
        heading.textContent = item.title;

        const ul = document.createElement("ul");
        item.shortItems.forEach(liText => {
            const li = document.createElement("li");
            li.textContent = liText;
            ul.appendChild(li);
        });

        areaDiv.appendChild(heading);
        areaDiv.appendChild(ul);
        gridContainer.appendChild(areaDiv);

    });

    // Now attach modal logic to dynamically created items
    const researchModal = document.getElementById("researchModal");
    const researchModalTitle = document.getElementById("research-modalTitle");
    const researchModalBody = document.getElementById("research-modalBody");
    const researchCloseBtn = document.querySelector(".research-close-btn");

    document.querySelectorAll(".research-area").forEach(area => {
        area.addEventListener("click", () => {
            const title = area.dataset.title;
            const description = JSON.parse(area.dataset.description);

            researchModalTitle.textContent = title;
            researchModalBody.innerHTML = description.map(item => `
            <p><strong>${item.heading}:</strong> ${item.text}</p>
            `).join("");

            researchModal.style.display = "block";
        });
    });

    // Add click event to close button
    researchCloseBtn.addEventListener("click", (e) => {
        researchModal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", event => {
        if (event.target === researchModal) {
            researchModal.style.display = "none";
        }
    });
});

// Send Email using EmailJS
// Initialize EmailJS
function initEmailJS() {
    emailjs.init("GhJc_wDLWZWLjuKut"); // EmailJS Public Key
}

// Method to send email using EmailJS
// Send email using EmailJS
function setupEmailForm(formId) {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            emailjs.sendForm('service_mxwwcdn', 'template_3puz5o9', form)
                .then(function (response) {
                    alert(`Thank you, ${name}! Your message has been sent successfully.`);
                    form.reset();
                    console.log("SUCCESS", response);
                }, function (error) {
                    alert("Failed to send email. Please try again.");
                    console.error("FAILED", error);
                });
        });
    }
}

initEmailJS();
setupEmailForm('contactForm');