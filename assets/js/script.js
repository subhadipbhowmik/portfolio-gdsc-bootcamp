'use strict';



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

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



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



// making scrolling 
// let scrollerID;
// let paused = true;
// let speed = 2; // 1 - Fast | 2 - Medium | 3 - Slow
// let interval = speed * 5;

// function startScroll(){
//     let id = setInterval(function() {
//         window.scrollBy(0, 2);
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             // Reached end of page
//             stopScroll();
//         }
//     }, interval);
//     return id;
// }

// function stopScroll() {
//     clearInterval(scrollerID);
// }

// document.body.addEventListener('keypress', function (event)
// {
//     if (event.which == 13 || event.keyCode == 13) {
//         // It's the 'Enter' key
//         if(paused == true) {
//             scrollerID = startScroll();
//             paused = false;
//         }
//         else {
//             stopScroll();
//             paused = true;
//         }
//     }
// }, true);