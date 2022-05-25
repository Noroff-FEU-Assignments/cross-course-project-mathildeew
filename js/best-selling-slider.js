let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("circle");
let currentSlide = 0;

document.getElementById("button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.querySelectorAll(".circle").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});
