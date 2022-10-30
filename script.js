const BURGER = document.querySelector(".burger");
const HEADERMENU = document.querySelector(".header-menu");

BURGER.addEventListener("click", function () {
  BURGER.classList.toggle("burger-active");
  HEADERMENU.classList.toggle("menu-open");
});
HEADERMENU.addEventListener("click", function () {
  BURGER.classList.toggle("burger-active");
  HEADERMENU.classList.toggle("menu-open");
});

const year = document.querySelector(".year");
let now = new Date();
year.textContent = now.getFullYear();
