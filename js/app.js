// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Comments should be present at the beginning of each procedure and class.
//  * Great to have comments before crucial code sections within the procedure.
// */

// /**
//  * Define Global Variables
//  * 
// */

// const navbarList = document.querySelector('#navbar__list');
// const sections = document.querySelectorAll('main > section');
// let activeSectionId = null;
// const navLinks = [];
// let scrollTimer = null;

// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
// */



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */

// // build the nav
// // Select the <ul> element by its id
// // Build the navigation menu
// function buildNav() {
//     sections.forEach(section => {
//         const sectionId = section.id;
//         const sectionName = section.dataset.nav;

//         // Create <li> and <a> elements
//         const listItem = document.createElement('li');
//         const anchorLink = document.createElement('a');

//         // Set attributes and text content for the anchor link
//         anchorLink.setAttribute('href', `#${sectionId}`);
//         anchorLink.textContent = sectionName;

//         // Append the anchor link to the list item, and list item to the navbar list
//         listItem.appendChild(anchorLink);
//         navbarList.appendChild(listItem);

//     });
// }

// // Example: Add some list items dynamically


// // Add class 'active' to section when near top of viewport


// // Scroll to anchor ID using scrollTO event
// // Smooth scrolling on clicking the anchor link
// anchorLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     scrollToSection(sectionId);
// });

// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// buildNav();

// // Scroll to section on link click

// // Set sections as active


document.addEventListener('DOMContentLoaded', function () {
    // Select the <ul> element in the navbar
    const navbarList = document.querySelector('#navbar__list');

    // Select all <section> elements in the main content
    const sections = document.querySelectorAll('main > section');

    // Build the navigation menu
    function buildNav() {
        sections.forEach(section => {
            const sectionId = section.id;
            const sectionName = section.dataset.nav;

            // Create <li> and <a> elements
            const listItem = document.createElement('li');
            const anchorLink = document.createElement('a');

            // Set attributes and text content for the anchor link
            anchorLink.setAttribute('href', `#${sectionId}`);
            anchorLink.textContent = sectionName;

            // Append the anchor link to the list item, and list item to the navbar list
            listItem.appendChild(anchorLink);
            navbarList.appendChild(listItem);

            // Smooth scrolling on clicking the anchor link
            anchorLink.addEventListener('click', function (event) {
                event.preventDefault();
                scrollToSection(sectionId);
            });
        });
    }

    // Smooth scroll to section
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Add class 'active' to section when near top of viewport
    function highlightActiveSection() {
        sections.forEach(section => {
            const sectionId = section.id;
            const navLink = navbarList.querySelector(`a[href="#${sectionId}"]`);

            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                section.classList.add('your-active-class');
                navLink.classList.add('active');
            } else {
                section.classList.remove('your-active-class');
                navLink.classList.remove('active');
            }
        });
    }

    // Build the initial navigation menu
    buildNav();

    // Scroll event listener to highlight active section
    window.addEventListener('scroll', highlightActiveSection);
});
