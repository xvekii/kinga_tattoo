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

const modal = document.querySelector("#modal");

const galleryImgs = document.querySelectorAll(".gallery-img");
const closeModal = document.querySelector(".close-modal");
let currentImage = document.getElementById("current-image");


// Event listeners for gallery images
galleryImgs.forEach(function(e) {
  e.addEventListener("click", () => {
    modal.showModal();
    imgChange(e);
    imgSlide(e);
  });
});

function imgChange(e) {
  currentImage.src = e.src;
  currentImage.alt = e.alt;
  console.log("current:", currentImage.src);

  // console.log(currentImage.alt);
};

function imgSlide(e) {
  
  currentImage.src = e.src;
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


modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
  
  } else if (e.target.nodeName === "IMG") {
    
      console.log("img e:", e);
      

  } else if (e.target.nodeName === "BUTTON") {
    
    // To be added
  
  }
});


// Buttons
const galleryButtons = document.querySelectorAll(".gallery-btn");

// function btnClick() {
galleryButtons.forEach(function(button) {
  button.addEventListener("click", () => {
  let btnAttr = button.getAttribute("class");
  console.log("btnAtr:", btnAttr);

  if (!btnAttr.includes("prev")) {
    console.log("next works!")
  } else {
    console.log("prev works!");
    


  }
});
 });

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
