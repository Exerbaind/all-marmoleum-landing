const menuButton = document.querySelector(".header__menu-handler");
const navbarList = document.querySelector(".header__navbar");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("header__menu-handler_active");
  navbarList.classList.toggle("header__navbar_active");
});
