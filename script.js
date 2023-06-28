const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));




// small logo disappear on scroll down ==> remove CSS

// let prevScrollPos = window.scrollY;
// window.onscroll = function() {
//   let currentScrollPos = window.scrollY;
//   if ((prevScrollPos > currentScrollPos) & !(prevScrollPos > 100)) {
//     document.querySelector(".small-logo-container").style.opacity = "1";
//     document.querySelector(".small-logo-container").style.pointerEvents = "all";
//   } else {
//     document.querySelector(".small-logo-container").style.opacity = "0";
//     document.querySelector(".small-logo-container").style.pointerEvents = "none";
//   }
//   prevScrollPos = currentScrollPos;
// }