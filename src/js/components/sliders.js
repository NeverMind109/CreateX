var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue("--grid-gap")); //get

const portSlider = document.querySelector(".portfolio-section__items");

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    init: function () {
      const activeSlide = portSlider.querySelector(".swiper-slide-active");
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nexrNextSlide = nextActiveSlide.nextElementSibling;
      activeSlide.classList.add("slider-visible");
      nextActiveSlide.classList.add("slider-visible");
      nexrNextSlide.classList.add("slider-visible");
    },
  },
  navigation: {
    nextEl: ".portfolio-section__next",
    prevEl: ".portfolio-section__prev",
  },
});

document
  .querySelector(".portfolio-section__next")
  .addEventListener("click", () => {
    const activeSlide = portSlider.querySelector(".swiper-slide-active");
    const nextActiveSlide = activeSlide.nextElementSibling;
    const nexrNextSlide = nextActiveSlide.nextElementSibling;
    document
      .querySelectorAll(".portfolio-section__items .swiper-slide")
      .forEach((el) => {
        el.classList.remove("slider-visible");
      });
    activeSlide.classList.add("slider-visible");
    nextActiveSlide.classList.add("slider-visible");
    nexrNextSlide.classList.add("slider-visible");
  });
document
  .querySelector(".portfolio-section__prev")
  .addEventListener("click", () => {
    const activeSlide = portSlider.querySelector(".swiper-slide-next");
    document
      .querySelectorAll(".portfolio-section__items .swiper-slide")
      .forEach((el) => {
        el.classList.remove("slider-visible");
      });
    if (activeSlide.previousElementSibling) {
      const nextActiveSlide = activeSlide.previousElementSibling;
      activeSlide.classList.add("slider-visible");
      nextActiveSlide.classList.add("slider-visible");
      activeSlide.nextElementSibling.classList.add("slider-visible");
    }
  });
