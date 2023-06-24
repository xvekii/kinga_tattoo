const buttonOne = document.querySelector(".button-one");
const navMenu = document.querySelector(".nav-menu");

buttonOne.addEventListener("click", () => {
  const isOpened = buttonOne.getAttribute("aria-expanded"); 
  if (isOpened === "false") {
    buttonOne.setAttribute("aria-expanded", "true");
  } else {
    buttonOne.setAttribute("aria-expanded", "false");
  }
  buttonOne.classList.toggle("active");
  navMenu.classList.toggle("active");
});