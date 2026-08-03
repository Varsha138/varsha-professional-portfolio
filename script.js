/* =========================================
   THEME
========================================= */

const body = document.body;

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    body.dataset.theme = "light";

    themeToggle.textContent = "🌙";

} else {

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    if (body.dataset.theme === "light") {

        delete body.dataset.theme;

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.textContent = "☀️";

    } else {

        body.dataset.theme = "light";

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.textContent = "🌙";

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});

document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");

const roles = [

    "Data Science solutions",

    "Python applications",

    "Machine Learning projects",

    "Deep Learning models",

    "Generative AI experiences"

];

let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const current =
        roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            current.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            current.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    } else {

        typingText.textContent =
            current.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );

}

typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   PROJECT DETAILS
========================================= */

const projectData = {

    preschool: {

        category:
            "DATABASE • MANAGEMENT",

        title:
            "Pre-Schooling Management System",

        description:
            "A centralized database management solution designed to organize and manage preschool information efficiently.",

        features: [

            "Manages student records",

            "Tracks attendance and student progress",

            "Supports admission management",

            "Provides fee tracking functionality",

            "Supports reporting and centralized data management",

            "Designed to reduce manual work and errors"

        ],

        technologies: [

            "Database",

            "SQL",

            "Management System"

        ]

    },


    musical: {

        category:
            "WEB • PYTHON",

        title:
            "Musical World System",

        description:
            "An interactive web-based system created for exploring and playing music while providing organized access to songs and playlists.",

        features: [

            "Interactive music exploration",

            "Music playback interface",

            "User playlist management",

            "Song library management",

            "Search functionality",

            "Dynamic and responsive design"

        ],

        technologies: [

            "HTML",

            "CSS",

            "Python"

        ]

    },


    leaf: {

        category:
            "AI • DEEP LEARNING • GENERATIVE AI",

        title:
            "Leaf Detection and Information Retrieval using Deep Learning and Generative AI",

        description:
            "An AI-based project that detects plants using leaf tissues and provides information through a combination of deep learning and Generative AI technologies.",

        features: [

            "Plant detection from leaf tissues",

            "CNN-based deep learning approach",

            "Generative AI integration",

            "Information retrieval functionality",

            "Website-based information presentation",

            "Developed using modern AI and application technologies"

        ],

        technologies: [

            "CNN",

            "Generative AI",

            "Flutter",

            "Ollama",

            "Docker"

        ]

    }

};


/* =========================================
   MODAL ELEMENTS
========================================= */

const modal =
    document.getElementById(
        "projectModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalFeatures =
    document.getElementById(
        "modalFeatures"
    );

const modalTechnologies =
    document.getElementById(
        "modalTechnologies"
    );


/* =========================================
   OPEN PROJECT MODAL
========================================= */

document
    .querySelectorAll(".project-details")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const project =
                    projectData[
                        button.dataset.project
                    ];

                modalCategory.textContent =
                    project.category;

                modalTitle.textContent =
                    project.title;

                modalDescription.textContent =
                    project.description;


                modalFeatures.innerHTML =
                    project.features
                        .map(feature => {

                            return `
                                <div class="modal-feature">
                                    ✓ ${feature}
                                </div>
                            `;

                        })
                        .join("");


                modalTechnologies.innerHTML =
                    project.technologies
                        .map(technology => {

                            return `
                                <span>
                                    ${technology}
                                </span>
                            `;

                        })
                        .join("");


                modal.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            });

    });


/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener(
    "click",
    closeProjectModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProjectModal();

        }

    }
);


function closeProjectModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}

/* =========================================
   PROJECT DISCUSSION - CREATIVE MODAL
========================================= */

const projects = {

    preschool: {
        number: "01",
        category: "DATABASE MANAGEMENT",
        title: "Pre-Schooling Management System",

        description:
            "A database-driven management system designed to simplify and organize preschool student information. The system focuses on maintaining student records, enrollment information and related data in a structured and easily accessible way.",

        highlights: [
            "Student Information Management",
            "Enrollment Record Management",
            "Structured Database Storage",
            "Easy Data Retrieval"
        ],

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS"
        ]
    },


    musical: {
        number: "02",
        category: "WEB APPLICATION",
        title: "Musical World System",

        description:
            "A web-based project created to organize and present musical information through a clean and user-friendly interface. The project focuses on structured information presentation and an engaging browsing experience.",

        highlights: [
            "User-Friendly Interface",
            "Organized Musical Information",
            "Responsive Web Design",
            "Interactive Web Experience"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },


    leaf: {
        number: "03",
        category: "AI & DEEP LEARNING",
        title: "Leaf Identification and Information Retrieval",

        description:
            "A deep learning and Generative AI based project designed to identify plant leaves and provide relevant information about the identified plant. The system combines image classification with information retrieval to create a more informative user experience.",

        highlights: [
            "Leaf Image Identification",
            "Deep Learning Classification",
            "CNN-Based Analysis",
            "Information Retrieval",
            "Generative AI Integration"
        ],

        technologies: [
            "Python",
            "CNN",
            "Deep Learning",
            "Generative AI"
        ]
    }

};


/* =========================================
   OPEN PROJECT MODAL
========================================= */

function openProject(project) {

    const selectedProject = projects[project];

    if (!selectedProject) {
        return;
    }


    /* Create modal */

    const modal = document.createElement("div");

    modal.className = "project-modal";

    modal.innerHTML = `

        <div class="project-modal-backdrop"></div>

        <div class="project-modal-card">

            <button
                class="project-modal-close"
                aria-label="Close project details">

                ×

            </button>


            <div class="project-modal-number">

                ${selectedProject.number}

            </div>


            <div class="project-modal-category">

                ${selectedProject.category}

            </div>


            <h2>

                ${selectedProject.title}

            </h2>


            <div class="project-modal-line"></div>


            <p class="project-modal-description">

                ${selectedProject.description}

            </p>


            <h4>

                Project Highlights

            </h4>


            <div class="project-highlights">

                ${selectedProject.highlights.map(item => `
                    
                    <div class="highlight-item">

                        <span class="highlight-icon">
                            ✓
                        </span>

                        <span>
                            ${item}
                        </span>

                    </div>

                `).join("")}

            </div>


            <h4>

                Technologies

            </h4>


            <div class="project-modal-tech">

                ${selectedProject.technologies.map(tech => `
                    
                    <span>
                        ${tech}
                    </span>

                `).join("")}

            </div>


            <div class="project-modal-footer">

                <span>
                    PROJECT ${selectedProject.number}
                </span>

                <span>
                    VARSHA V
                </span>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";


    /* Animate opening */

    requestAnimationFrame(() => {

        modal.classList.add("active");

    });


    /* Close button */

    const closeButton =
        modal.querySelector(".project-modal-close");


    closeButton.addEventListener("click", () => {

        closeProjectModal(modal);

    });


    /* Click outside modal */

    modal.querySelector(".project-modal-backdrop")
        .addEventListener("click", () => {

            closeProjectModal(modal);

        });


    /* Escape key */

    document.addEventListener(
        "keydown",
        function escapeHandler(event) {

            if (event.key === "Escape") {

                closeProjectModal(modal);

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );

            }

        }
    );

}


/* =========================================
   CLOSE PROJECT MODAL
========================================= */

function closeProjectModal(modal) {

    modal.classList.remove("active");

    setTimeout(() => {

        modal.remove();

        document.body.style.overflow = "";

    }, 400);

}
