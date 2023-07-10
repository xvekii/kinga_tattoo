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
const closeModal = document.querySelector(".close-modal");
let currentImage = document.getElementById("current-image");

let counter = 0;

// Opening gallery images on click
galleryImgs.forEach(function(e) {
  e.addEventListener("click", () => {
    modal.showModal();
    
    counter = imgChange(e);
    imgSlide();
  });
});

function imgChange(e) {
  currentImage.src = e.src;
  currentImage.alt = e.alt;
  console.log("currentImgChange:", currentImage.src);
  
  let currentImageAlt = currentImage.alt;
  prevImageNum = currentImageAlt.substring(6);
  counter = Number(prevImageNum);
  
  // currentImage.src = "images/image" + `${prevImageNum}` + ".jpg";
  
  console.log("counterImgChange:", counter);

  return counter;

  // tu staviti counter za alt?


  // console.log(currentImage.alt);
};

const galleryButtons = document.querySelectorAll(".gallery-btn");

function imgSlide() {

// Buttons
// Add eventListener to all buttons

galleryButtons.forEach(function(button) {
  button.addEventListener("click", () => {
  
  // Get clicked button attribute  
  let btnAttr = button.getAttribute("class");

  // Button clicked check
  // Right btn clicked (next)
  if (!btnAttr.includes("prev")) {
    console.log("next works!")
    
    // Left button clicked (prev)
  
  } else if (counter > 1) {
      // console.log("prev works!");
      currentImage.src = "images/image" + `${counter - 1}` + ".jpg";
      // console.log("currentFinal:", currentImage.src);
      // console.log("counterFinal:", counter);
      counter--;
  } else {
    counter = 83;
  }
  });
});









  // console.log("Alt start: ", currentImageAlt);
  // currentImageAlt = currentImage.alt;
  // prevImageNum = currentImageAlt.substring(6);
  // prevImageNum = Number(prevImageNum);
  // let counter = 1;
  // prevImageNum = prevImageNum - counter;
  // console.log("AltConv", prevImageNum);
 
  // currentImage.src = "images/image" + `${prevImageNum}` + ".jpg";
  // console.log("sourceOpen", openModal[prevImageNum].src);
  // console.log("AltprevImgEnd:", prevImageNum);
  // console.log(`prev image number last: ${prevImageNum}, currImageSrcEnd: ${currentImage.src}`);
}


closeModal.addEventListener("click", () => {
  modal.close();
});

// Click on modal closes it
// Maybe simplify?
modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
  
  } else if (e.target.nodeName === "IMG") {
    
      console.log("img e:", e);

  } else if (e.target.nodeName === "BUTTON") {
    
    // To be added
  }
});


// // Buttons
// const galleryButtons = document.querySelectorAll(".gallery-btn");

// // Add eventListener to all buttons

// galleryButtons.forEach(function(button) {
//   button.addEventListener("click", () => {
  
//   // Get clicked button attribute  
//   let btnAttr = button.getAttribute("class");
//   console.log("btnAtr:", btnAttr);

//   // Button clicked check
//   // Right btn clicked (next)
//   if (!btnAttr.includes("prev")) {
//     console.log("next works!")
    
//     // Left button clicked (prev)
//   } else {
//     console.log("prev works!");
    
//   }
  
//   });
// });

// let btnAttr = galleryBtn.getAttribute("class");
    // console.log(btnAttr);
    
    // console.log("Alt start: ", currentImageAlt);
    // currentImageAlt = currentImage.alt;
    // prevImageNum = currentImageAlt.substring(6);
    // prevImageNum = Number(prevImageNum);
    // let counter = 1;
    // prevImageNum = prevImageNum - counter;
    // console.log("AltConv", prevImageNum);
    // currentImage.src = "images/image" + `${prevImageNum}` + ".jpg";
    // console.log("AltprevImgEnd:", prevImageNum);
    // console.log(`prev image number last: ${prevImageNum}, currImageSrcEnd: ${currentImage.src}`);
