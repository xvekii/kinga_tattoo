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



const openModal = document.querySelectorAll(".gallery-img");
const closeModal = document.querySelector(".close-modal");



openModal.forEach(function(e) {
  e.addEventListener("click", () => {
    
    modal.showModal();
    imgChange();
    
    // for (let i = 1; i <= 20; i++) {
    //   let thumb = document.createElement("img");
    //   thumb.src = "images/image" + i + ".jpg";
    //   thumb.alt = "Image " + "i";
    //   currentImage.src = this.src;
    //   currentImage.alt = this.alt;

    // }
    
  });
});
  
closeModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
  }
});

function imgChange() {
  let currentImage = document.getElementById("current-image");
  currentImage.src = "images/image2.jpg";

}


    

// let currentImage = document.getElementById("#current-image");


// const buttons = document.querySelector("[data-button]");
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     currentImage.src = this.src;
//     currentImage.alt = this.alt;
//   });
// });

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