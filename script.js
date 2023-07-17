const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const gallery = document.getElementById("gallery");
const smallLogo = document.querySelector(".small-logo-container");
const ctaMainContainer = document.querySelector(".cta-btns-container-main");

// Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("active");
  if(gallery) {
    gallery.classList.toggle("blocked");
  }
  smallLogo.classList.toggle("blocked");
  if(ctaMainContainer) {
  ctaMainContainer.classList.toggle("blocked");
  }
});

// Navigation
document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("active");
  smallLogo.classList.toggle("blocked");
  ctaMainContainer.classList.toggle("blocked");
  gallery.classList.toggle("blocked");
}));


document.body.addEventListener("click", function(e) {
  console.log("target: ", e.target.classList);
});


// Go to gallery on click
const sectionGallery = document.getElementById("section");
const goToGalleryBtn = document.querySelector(".cta-btn--gallery");


if(goToGalleryBtn){
  goToGalleryBtn.addEventListener("click", () => {
    sectionGallery.scrollIntoView();
  });
}

const contactBtn = document.querySelector(".cta-btn--contact");
if(contactBtn){
  contactBtn.addEventListener("click", () => {
    location.href = "contact.html";
  });
}

const modal = document.querySelector("#modal");
const galleryImgs = document.querySelectorAll(".gallery-img");
const closeModalBtn = document.querySelector(".close-modal");
let currentImage = document.getElementById("current-image");

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
      counter++;
      } else {
        counter = 0;
      }
    } else if (counter > 1) {
        currentImage.src = "images/image" + `${counter - 1}` + ".jpg";
        counter--;
    } else {
      counter = 81;
    }
    });
  });
}

if(closeModalBtn){
  closeModalBtn.addEventListener("click", () => {
    modalCloseScrollOn();
    // gallery.style.pointerEvents = "auto";
    modal.close();
  });
}

if(modal) {
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