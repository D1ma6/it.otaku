// navbar
const navbar = document.querySelector(".header");
const navbarLink = document.querySelectorAll(".header__navbar__item > a");
const logo = document.querySelector(".header__logo > img");
navbarLink.forEach((item) => {
  item.style.color = "white";
});
window.onscroll = () => {
  if (window.pageYOffset > 40) {
    navbar.style.background = "white";
    navbar.style.height = "60px";
    navbarLink.forEach((item) => {
      item.style.color = "black";
    });
    logo.src = "./img/logo-d.svg";
  } else {
    navbar.style.background = "";
    navbar.style.height = "80px";
    navbarLink.forEach((item) => {
      item.style.color = "white";
    });
    logo.src = "./img/logo.svg";
  }
};
