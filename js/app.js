/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * Check if the section is in the viewport
 */
function isInViewport(section) {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
function buildNav() {
    sections.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(listItem);
    });
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            document.querySelector(`a[href="#${section.id}"]`).classList.remove('active');
        }
    });
}

// Scroll to anchor ID using scrollIntoView
function scrollToSection(event) {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
        const sectionId = event.target.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navList.addEventListener('click', scrollToSection);

// Set sections as active
document.addEventListener('scroll', setActiveSection);