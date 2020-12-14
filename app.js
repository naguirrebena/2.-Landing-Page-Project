
/**
 /* Define Global Variables */
 const sections = document.querySelectorAll("section");
 const navbarList = document.getElementById("navbar__list");
 const scrollbtn = document.getElementById("myBtn");

 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build menu 
const mainMenu = () => {

  let navTOP = '';
  sections.forEach(section => {

      const id = section.id;
      const dataNav = section.dataset.nav

      navTOP += `<li><a class= "menu__link ${id}" href="#${id}">${dataNav}</a></li>`;

  });
  navbarList.innerHTML = navTOP;
};

mainMenu();
  

// Set sections as active

for (const section of sections) {
  window.addEventListener("scroll", function () {
    const box = section.getBoundingClientRect();
    const id = section.getAttribute("id");

    if (box.top <= 120 && box.bottom >= 120) {
      document.querySelector(`.${id}`).classList.add("active");
      section.classList.add("your-active-class");
    } else {
      document.querySelector(`.${id}`).classList.remove("active");
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('.navbar__menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth'
    });
  });
});

/**
* End Main Functions
* Begin Events
* 
*/

//Scroll Up Button
// Show button When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/** 
 * End Main Functions
 * Begin Events
 * 
*/