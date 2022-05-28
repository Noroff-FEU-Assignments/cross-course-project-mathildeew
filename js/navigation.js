const navMenu = document.querySelector("#nav");

// ----------  NAVIGATION BAR SMALL SCREEN
const hamburgerMenu = document.querySelector(".hamburger-menu");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", mobileMenu);
// hamburgerClose.addEventListener("click", closeMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  // body.style.overflow = "hidden";
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

// ---------- SHOPPING CART
const cartIcon = document.querySelector("#shopping-cart-icon");
const shoppingCart = document.querySelector(".shopping-cart");
const close = document.querySelector(".close-button");

cartIcon.addEventListener("click", openShoppingCart);

function openShoppingCart() {
  shoppingCart.classList.toggle("active");
  navMenu.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  body.style.overflow = "hidden";
}

close.addEventListener("click", closeShoppingCart);

function closeShoppingCart() {
  shoppingCart.classList.remove("active");
  body.style.overflow = "visible";
}
