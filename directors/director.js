const directors = {
    bhaskar : {
        name: "Dr. K. Bhaskar Reddy",
        title: "Academic Leader & FSSAI Member",
        image: "../assets/images/director/bhaskar_reddy.jpeg",
        shortDesc: "Dean at Apollo University with over 153 publications. Led projects worth ₹200 Lakhs and brings extensive academic expertise to our foundation.",
        description:  "Dr. K. Bhaskar Reddy leads our pharmaceutical and health sciences research with distinguished credentials as Professor & Dean at Apollo Institute of Pharmaceutical Sciences and Dean (in-charge) of the School of Health Sciences at The Apollo University. His research portfolio includes over 153 peer-reviewed publications and multiple patents that have advanced pharmaceutical knowledge. As principal investigator for seven major research projects valued at ₹200 Lakhs and funded by prestigious bodies such as the Department of Science & Technology (DST) and the Indian Council of Medical Research (ICMR), he has established himself as a significant contributor to India's research landscape. His multidisciplinary research expertise is recognized through his membership on the Scientific Panel/Scientific Expert Committee on Functional Foods, Nutraceuticals, and Dietetic Products under FSSAI, under the Ministry of Health & Family Welfare, Government of India. His research leadership extends to serving as Dean - R&D at Sri Venkateswara Group of Educational Institutions (SVGEI), where he established research centers, secured research funding, and developed research partnerships with international universities. Dr. Reddy's research excellence has been recognized with the Young Scientist Award by SERB, DST, highlighting his innovative contributions to pharmaceutical sciences. As Chief Editor of the International Journal of Advanced Biomedical and Pharmaceutical Research (IJABPR) and reviewer for multiple international journals, he plays a critical role in advancing scientific publishing and research dissemination. His interdisciplinary research vision and commitment to evidence-based healthcare innovations continue to drive Dhrishta's research agenda."
    },

    rukesh: {
        name: "Mr. A. Rukesh Reddy",
        title: "Engineering Research & Innovation Lead",
        image: "../assets/images/director/rukesh.jpeg",
        shortDesc: "Mechanical Engineering professional, SPOC for Dassault. Actively involved with Skill Development and various training/mentoring initiatives.",
        description: "Mr. A. Rukesh Reddy directs our engineering research and innovation initiatives, bringing specialized expertise in Mechanical Engineering, advanced manufacturing technologies, and emerging fields like 3D Printing. Currently pursuing doctoral research at Pacific University, Udaipur, his investigative focus represents the foundation's commitment to continuous knowledge advancement. His leadership in technology research is demonstrated through his role as Single Point of Contact (SPOC) for Dassault Systems' 3D Experience Lab, where he has facilitated applied research in digital manufacturing technologies. His expertise in securing research grants from funding bodies such as UGC, AICTE, and DST has strengthened institutional research capacity and infrastructure development. Mr. Reddy's contributions to technology diffusion through the Skill Development initiatives and have created a bridge between laboratory research and practical applications. His ongoing specialized research training in 3D Printing from the University of Illinois and Supply Chain Logistics from Rutgers University reflects his commitment to advancing research frontiers. At Dhrishta, he leads research initiatives in advanced manufacturing, engineering education, and technology transfer that connect theoretical frameworks with practical applications."
    },

    rajesh: {
        name: "Mr. Rajesh Kadati",
        title: "Digital Innovation & Automation Expert",
        image: "../assets/images/director/rajesh.jpeg",
        shortDesc: "Senior Test Engineer at TCS with experience at Apple Inc. Expertise in DevOps and API Testing, actively mentoring professionals and supporting foundation's technical initiatives.",
        description: "Mr. Rajesh Kadati heads our digital innovation research with over 14 years of specialized expertise in automation technologies, software quality engineering, and DevOps methodologies. His technical research at Tata Consultancy Services (TCS) has involved developing innovative testing frameworks and quality assurance methodologies for global technology leaders like Apple Inc. His research focus on API automation, mobile application testing protocols, and performance optimization has contributed significant knowledge to software quality engineering. His expertise in web services testing (REST & SOAP UI) and performance analysis using JMeter and LoadRunner demonstrates his research depth in digital technologies. At Dhrishta, Mr. Kadati's technical research informs our digital education platforms, online learning analytics, and educational technology innovations. His expertise in automation frameworks and continuous integration methodologies drives our research in adaptive learning technologies, educational data mining, and AI-driven assessment systems. His investigative approach to technology implementation ensures that Dhrishta's digital initiatives are built on sound scientific principles and research evidence."
    }
}

function renderDirectors() {
    const container = document.getElementById('directors-container');
    if (!container) return;

    Object.values(directors).forEach(director => {
        const card = document.createElement('div');
        card.className = 'director-card';

        const imgSrc = director.image ? director.image : '../assets/images/director/placeholder.png';

        card.innerHTML = `
            <div class="director-img-wrap">
                <img src="${imgSrc}" alt="${director.name}" class="director-img"/>
            </div>
            <div class="director-info">
                <div class="director-label">Board of Directors</div>
                <div class="director-name">${director.name}</div>
                <div class="director-title">${director.title}</div>
                <div class="director-description">${director.description}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderDirectors);