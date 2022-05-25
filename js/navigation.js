const navMenu = document.querySelector("#nav");

// ----------  NAVIGATION BAR SMALL SCREEN
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", mobileMenu);
// hamburgerClose.addEventListener("click", closeMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}

// ---------- STICKY NAVIGATION BAR BIG SCREEN

const logo = document.querySelector(".nav-logo");
const iconsRight = document.querySelector(".nav-icons-right");

window.addEventListener("scroll", stickyNav);

function stickyNav() {
  

  navMenu.classList.toggle("sticky", window.scrollY > 115);
  logo.classList.toggle("sticky", window.scrollY > 115);
  iconsRight.classList.toggle("sticky", window.scrollY > 115);
}
