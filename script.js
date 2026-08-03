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