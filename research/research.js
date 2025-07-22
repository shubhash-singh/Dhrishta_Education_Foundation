document.addEventListener('DOMContentLoaded', function() {
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

    // Generate research cards
    const gridContainer = document.querySelector(".research-grid");

    researchData.forEach((item, index) => {
        const areaDiv = document.createElement("div");
        areaDiv.classList.add("research-area", "animate-on-scroll");
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

        // Add staggered animation
        setTimeout(() => {
            areaDiv.classList.add('animate-in');
        }, index * 200);
    });

    // Modal functionality
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
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functionality
    researchCloseBtn.addEventListener("click", () => {
        researchModal.style.display = "none";
        document.body.style.overflow = 'auto';
    });

    window.addEventListener("click", event => {
        if (event.target === researchModal) {
            researchModal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });

    // Animate research impact cards
    const impactCards = document.querySelectorAll('.research-impact-card');
    
    const animateImpactCards = function() {
        impactCards.forEach((card, index) => {
            const elementPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 150);
            }
        });
    };
    
    window.addEventListener('scroll', animateImpactCards);
    setTimeout(animateImpactCards, 500);
});