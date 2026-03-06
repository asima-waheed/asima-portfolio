'use strict';

// Enable progressive enhancement styles
document.documentElement.classList.add("js");



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * close navbar when a nav link is clicked (mobile)
 */

addEventOnElements(navLinks, "click", function () {
  if (navbar.classList.contains("active")) toggleNavbar();
});



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



/**
 * DARK MODE TOGGLE
 */

const themeToggleBtn = document.querySelector("[data-theme-toggler]");
const html = document.documentElement;

// Get theme from localStorage or default to light
const getTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light";
};

// Set theme
const setTheme = (theme) => {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// Initialize theme on page load
const initTheme = () => {
  const currentTheme = getTheme();
  setTheme(currentTheme);
};

// Toggle theme
const toggleTheme = () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
};

// Initialize theme when page loads
initTheme();

// Add click event to theme toggle button
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}