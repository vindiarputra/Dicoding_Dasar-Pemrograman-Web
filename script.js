const hamburgerMenu = document.querySelector("#hamburgerMenu");
const crossIcon = document.querySelector("#crossIcon");
const dropdown = document.querySelector(".dropdown");

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenu.style.display = "none";
  crossIcon.style.display = "block";
  dropdown.style.display = "block";
});

crossIcon.addEventListener("click", function (e) {
  e.preventDefault;
  hamburgerMenu.style.display = "block";
  crossIcon.style.display = "none";
  dropdown.style.display = "none";
});

window.addEventListener("resize", resizeToMobile);

function resizeToMobile() {
  if (window.innerWidth < 480) {
    hamburgerMenu.style.display = "block";
    crossIcon.style.display = "none";
    dropdown.style.display = "none";
  } else {
    hamburgerMenu.style.display = "none";
    crossIcon.style.display = "none";
    dropdown.style.display = "none";
  }
}

resizeToMobile();

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
