const hamburgerBtn = document.getElementById("hamburger-icon");
const sideNav = document.getElementById("side-nav");
const closeBtn = document.getElementById("close-icon");

hamburgerBtn.addEventListener("click", () => {
  sideNav.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.add("hidden");
});
