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

// Go to gallery on click
const sectionGallery = document.getElementById("section");
const goToGalleryBtn = document.querySelector(".cta-btn--gallery");
goToGalleryBtn.addEventListener("click", () => {
  sectionGallery.scrollIntoView();
});

const contactBtn = document.querySelector(".cta-btn--contact");
contactBtn.addEventListener("click", () => {
  location.href = "contact.html";
});

const modal = document.querySelector("#modal");
const galleryImgs = document.querySelectorAll(".gallery-img");
const closeModalBtn = document.querySelector(".close-modal");
let currentImage = document.getElementById("current-image");

let counter = 0;

// Opening gallery images on click
galleryImgs.forEach(function(e) {
  e.addEventListener("click", () => {
    modal.showModal();
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
      if (counter < 82) {
      currentImage.src = "images/image" + `${counter + 1}` + ".jpg";
      counter++;
      } else {
        counter = 0;
      }
    } else if (counter > 1) {
        currentImage.src = "images/image" + `${counter - 1}` + ".jpg";
        counter--;
    } else {
      counter = 83;
    }
    });
  });
}

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
  }
});
