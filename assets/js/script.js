// Hamburger menu
const navMenu = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Slider
const slides = document.querySelectorAll(".images");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;
let slideInterval;

const plusSlides = (index) => {
  showSlides((slideIndex += index));
};

const currentSlide = (index) => {
  showSlides((slideIndex = index));
};

const showSlides = (index) => {
  slideIndex = index;

  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  resetAutoSlide();
};

const autoSlide = () => {
  slideIndex++;
  showSlides(slideIndex);
};

const resetAutoSlide = () => {
  clearInterval(slideInterval);
  slideInterval = setTimeout(autoSlide, 5000);
};

autoSlide();

// Modal box
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const btnPesan = document.querySelector(".btn-pesan");
const btnClose = document.querySelector(".btn-close");
const btnSubmit = document.querySelector("#btn-submit");

btnPesan.addEventListener("click", () => {
  modal.style.display = "flex";
});

document.addEventListener("click", (e) => {
  if (e.target === modal || e.target === btnClose || e.target === btnSubmit) {
    modal.style.display = "none";
  }
});
