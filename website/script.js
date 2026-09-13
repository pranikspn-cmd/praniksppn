/* =========================================
   PRANIKS WEBSITE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       SMOOTH NAVIGATION
       ================================ */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ================================
       HEADER SCROLL EFFECT
       ================================ */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 2px 15px rgba(0, 0, 0, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* ================================
       SCROLL REVEAL
       ================================ */

    const elements = document.querySelectorAll(
        ".intro, .section-heading, .card, .store, footer"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* ================================
       IMAGE LOADING
       ================================ */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("load", function () {

            image.classList.add("loaded");

        });

    });


    /* ================================
       CURRENT YEAR
       ================================ */

    const yearElement = document.querySelector(".copyright");

    if (yearElement) {

        yearElement.innerHTML =
            "© " +
            new Date().getFullYear() +
            " PRANIKS — THE STANDARD";

    }

});