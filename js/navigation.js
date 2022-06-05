// ----------  NAVIGATION BAR SMALL SCREEN
const navMenu = document.querySelector("#nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuClose = document.querySelector("hamburger-menu active");

const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  if (navMenu.classList.toggle("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
}

// ---------- STICKY NAVIGATION BAR BIG SCREEN

const logo = document.querySelector(".nav-logo");
const iconsRight = document.querySelector(".nav-icons-right");

window.addEventListener("scroll", stickyNav);

function stickyNav() {
  logo.classList.toggle("sticky", window.scrollY > 45);
  iconsRight.classList.toggle("sticky", window.scrollY > 45);
  navMenu.classList.toggle("sticky", window.scrollY > 180);
}

// ---------- SHOPPING CART
const cartIcon = document.querySelector("#shopping-cart-icon-small");
const cartIconBig = document.querySelector("#shopping-cart-icon-big");
const shoppingCart = document.querySelector(".shopping-cart");
const slider = document.querySelector(".picture-slider");

const close = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");

cartIcon.addEventListener("click", openShoppingCart);
cartIconBig.addEventListener("click", openShoppingCartBig);

function openShoppingCart() {
  shoppingCart.classList.toggle("active");
  navMenu.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  body.style.overflow = "hidden";
  overlay.classList.toggle("active");
  slider.style.zIndex = "-1";
}

function openShoppingCartBig() {
  shoppingCart.classList.toggle("active");
  navMenu.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  body.style.overflow = "hidden";
  overlay.classList.toggle("active");
  slider.style.zIndex = "-1";
  navMenu.style.zIndex = "0";
}

close.addEventListener("click", closeShoppingCart);

function closeShoppingCart() {
  shoppingCart.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "visible";
  slider.style.zIndex = "0";
  navMenu.style.zIndex = "10";
}

// ---------- SEARCH
const searchIcon = document.querySelector("#search-icon-small");
const searchIconBig = document.querySelector("#search-icon-big");
const searchBar = document.querySelector(".search-bar");
const closeIcon = document.querySelector(".search-close");

searchIcon.addEventListener("click", openSearch);
searchIconBig.addEventListener("click", openSearchBig);

function openSearch() {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  body.style.overflow = "hidden";
  slider.style.zIndex = "-1";
}

function openSearchBig() {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  body.style.overflow = "hidden";
  slider.style.zIndex = "-1";
}

closeIcon.addEventListener("click", closeSearch);

function closeSearch() {
  searchBar.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "visible";
  slider.style.zIndex = "0";
}
