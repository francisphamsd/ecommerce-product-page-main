const hamburgerBtn = document.getElementById("hamburger-icon");
const sideNav = document.getElementById("side-nav");
const closeBtn = document.getElementById("close-icon");

const carousel = document.querySelector(".carousel__track");
const slides = [...carousel.children];
console.log(slides);
// Hamburger button logic

hamburgerBtn.addEventListener("click", () => {
  sideNav.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.add("hidden");
});

// Carousel logic

// Arrange the slides next to one another

// Slide left when click left
// Slide right when click right
// Click nav indicator, move to that slide
