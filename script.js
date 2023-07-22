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

// Hamburger
hamburger.addEventListener("click", () => {
  
  let focusableEls = document.querySelectorAll(".nav__menu");
  let firstFocusableEl = focusableEls[0];
  let lastFocusableEl = focusableEls[focusableEls.length - 1];

  console.log("first focus:", firstFocusableEl);

  navMenu.addEventListener("keydown", function(e) {
    let isTabPressed = (e.key === "Tab" || e.code === KEYCODE_TAB);

    if(isTabPressed) {
      if(document.activeElement === firstFocusableEl) {
        firstFocusableEl.focus();
      }
    }
  })

  // navMenu.focus();
  
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("active");
  smallLogo.classList.toggle("blocked");
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
  smallLogo.classList.remove("blocked");
  ctaMainContainer.removeAttribute("inert");
  gallery.removeAttribute("inert");
  mainContactWrapper.removeAttribute("inert");
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
  currentImage.alt = e.alt;
  console.log("currentImgChange:", currentImage.src);
  let currentImageAlt = currentImage.alt;
  prevImageNum = currentImageAlt.substring(6);
  counter = Number(prevImageNum);
  
  console.log("counterImgChange:", counter);

  return counter;
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