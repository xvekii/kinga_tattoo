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


  }
  // } else {
  //   console.log("error)")
  // }
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
    // let currentImageAlt = currentImage.alt;
    // let prevImageNum = currentImageAlt.substring(6);
    // prevImageNum = Number(prevImageNum);
    // let i = 1;
    // currentImage.src = "images/image" + (prevImageNum - i) + ".jpg";
    // console.log("prevImg:", prevImageNum);
    // console.log(`prev image number: ${prevImageNum}, currImageSrc1: ${currentImage.src}`);
  }
});
 });





  
    

  
  // let currentImageAlt = currentImage.alt;
  // console.log(`currentAlt0: ${currentImageAlt}, currImageSrc0: ${currentImage.src}`);
  // let prevImageNum = currentImageAlt.substring(6);
  // console.log(prevImageNum);
  // let newSrc = "images/image" + (prevImageNum - 1) + ".jpg";
  // currentImage.src = newSrc;
  // console.log(`prev image number: ${prevImageNum}, currImageSrc1: ${currentImage.src}`);




// button = e.getAttribute;
//   if (button === "[data-button]") {
//     alert("Ahoy, Matey!");
//   }

// function imgChange() {
//   let currentImage = document.getElementById("current-image");
//   currentImage.src = "images/image2.jpg";
//   console.log(currentImage.alt);
// }

// let currentImage = document.getElementById("#current-image");


// let imageThumbs = document.getElementById("gallery-img");


// for (let i = 1; i <= 20; i++) {
//   let thumb = document.createElement("img");
//   thumb.src = "images/image" + i + ".jpg";
//   thumb.alt = "Image " + "i";

//   currentImage.addEventListener("click", () => {
//     currentImage.src = this.src;
//     currentImage.alt = this.alt;
//   });

// }






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