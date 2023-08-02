const KEYCODE_TAB = 9;
const KEYCODE_ESC = 27;
const KEYCODE_ENTER = 12;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const gallery = document.getElementById("gallery");
const smallLogo = document.querySelector(".small-logo-container");
const ctaMainContainer = document.querySelector(".cta-btns-container-main");
const footer = document.querySelector(".footer");
const mainContactWrapper = document.querySelector(".main-contact-wrapper");
const mainWrapper = document.querySelector(".main-wrapper");

// Hamburger
hamburger.addEventListener("click", () => {
  
  let focusableEls = navMenu.getElementsByTagName("a");
  let firstFocus = document.querySelector(".hamburger")
  console.log("FF: ", firstFocus);
  // let firstFocusableEl = focusableEls[0];
  let lastFocusableEl = focusableEls[focusableEls.length - 1];

  // console.log("first focus:", firstFocusableEl);
  // console.log("last focus:", lastFocusableEl);
  // console.log("focusableEls:", focusableEls);
  navMenu.setAttribute("aria-modal", "true");

  navMenu.addEventListener("keydown", function(e) {
    let isTabPressed = (e.key === "Tab" || e.code === KEYCODE_TAB);
    console.log(e);
    if (!isTabPressed) { 
      return; 
    }

    if (e.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocus) {
        lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocus.focus();
          e.preventDefault();
        }
      }
  });
  
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("active");
  smallLogo.toggleAttribute("inert");
  if (ctaMainContainer) {
    ctaMainContainer.toggleAttribute("inert");
  }
  if (gallery) {
    gallery.toggleAttribute("inert");
  }
  if (mainContactWrapper) {
    mainContactWrapper.toggleAttribute("inert");
  }
  footer.toggleAttribute("inert");
});

// Navigation
document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("active");
  smallLogo.removeAttribute("inert");
  ctaMainContainer.removeAttribute("inert");
  gallery.removeAttribute("inert");
  if (mainContactWrapper) {
    mainContactWrapper.removeAttribute("inert");
  }
  footer.removeAttribute("inert");
}));

// Go to gallery on click
const sectionGallery = document.getElementById("section");
const goToGalleryBtn = document.querySelector(".cta-btn--gallery");


if (goToGalleryBtn){
  goToGalleryBtn.addEventListener("click", () => {
    sectionGallery.scrollIntoView();
  });
}

const contactBtn = document.querySelector(".cta-btn--contact");
if (contactBtn){
  contactBtn.addEventListener("click", () => {
    location.href = "contact.html";
  });
}

const modal = document.querySelector("#modal");
const galleryImgs = document.querySelectorAll(".gallery-img");
const closeModalBtn = document.querySelector(".close-modal");
let currentImage = document.getElementById("current-image");
const imagesArr = Array.from(galleryImgs, (image) => image.src);

if (!currentImage) {
  currentImage = "";
}

let counter = 0;

// Opening gallery images on click
galleryImgs.forEach(function(e) {
  e.addEventListener("click", () => {
    modal.showModal();
    document.body.classList.toggle("active");
    imgChange(e);
    imgSlide(counter);
  });
});

function imgChange(e) {
  currentImage.src = e.src;
  counter = imagesArr.indexOf(currentImage.src);
};

const galleryButtons = document.querySelectorAll(".gallery-btn");

let tempImage = currentImage.src;

function imgSlide(counter) {

  // Buttons
  galleryButtons.forEach(function(button) {
    button.addEventListener("click", () => {
    
    // Get clicked button attribute  
    let btnAttr = button.getAttribute("class");

    // Button clicked check
    // Right btn clicked (next)
    if (!btnAttr.includes("prev")) {
      if (counter < 80) {
      currentImage.src = "images/image" + `${counter + 1}` + ".jpg";
      console.log("initial counterBtnChange:", counter);
      counter++;
      console.log("initial counterBtnPost++:", counter);
      } else {
        currentImage.src = tempImage;
        counter = 0;
        console.log("elseCounter++:", counter);
      }
    } else if (counter > 1) {
      currentImage.src = "images/image" + `${counter - 1}` + ".jpg";
      console.log("initial counterBtnChange:", counter);
      counter--;
      console.log("initial counterBtnPost--:", counter);
    } else {
      currentImage.src = tempImage;
      counter = 81;
      console.log("elseCounter--:", counter);
    }
    });
  });
}

if (closeModalBtn){
  closeModalBtn.addEventListener("click", () => {
    modalCloseScrollOn();
    // gallery.style.pointerEvents = "auto";
    modal.close();
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modalCloseScrollOn();
    modal.close();
  }
  });
}

function modalCloseScrollOn() {
  document.body.classList.remove("active");
}