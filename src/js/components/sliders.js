var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue("--grid-gap")); //get

const portSlider = document.querySelector(".portfolio-section__items");
const relatedSlider = document.querySelector(".related-projects__items");

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const heroSliderSpeed = 1500;

const fooBar = bodyStyles.getPropertyValue("--hero-slider-speed"); //get
document.body.style.setProperty("--hero-slider-speed", heroSliderSpeed + "ms"); //set
const heroSlider = new Swiper(".hero-slider ", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev",
  },
  speed: heroSliderSpeed,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".hero__pag",
    type: "bullets",
    clickable: true,
  },
  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll(
        ".hero__pag .swiper-pagination-bullet"
      );
      paginationBullets.forEach((el) => {
        el.innerHTML = '<span class="hero__bar"></span>';
      });
    },
  },
});

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 1,
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
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
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
}

const testimonialsSlider = new Swiper(".testimonials__items", {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});

if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    on: {
      init: function () {
        const activeSlide = relatedSlider.querySelector(".swiper-slide-active");
        const nextActiveSlide = activeSlide.nextElementSibling;
        const nexrNextSlide = nextActiveSlide.nextElementSibling;
        activeSlide.classList.add("slider-visible");
        nextActiveSlide.classList.add("slider-visible");
        nexrNextSlide.classList.add("slider-visible");
      },
    },
    navigation: {
      nextEl: ".related-projects__next",
      prevEl: ".related-projects__prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  document
    .querySelector(".related-projects__next")
    .addEventListener("click", () => {
      const activeSlide = relatedSlider.querySelector(".swiper-slide-active");
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nexrNextSlide = nextActiveSlide.nextElementSibling;
      document
        .querySelectorAll(".related-projects__items .swiper-slide")
        .forEach((el) => {
          el.classList.remove("slider-visible");
        });
      activeSlide.classList.add("slider-visible");
      nextActiveSlide.classList.add("slider-visible");
      nexrNextSlide.classList.add("slider-visible");
    });
  document
    .querySelector(".related-projects__prev")
    .addEventListener("click", () => {
      const activeSlide = relatedSlider.querySelector(".swiper-slide-next");
      document
        .querySelectorAll(".related-projects__items .swiper-slide")
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
}

const workImages = document.querySelector(".work-images-slider");
if (workImages) {
  const workSliderNav = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      },
    },
  });
  const workSlides = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSliderNav,
    },
  });
}

const historyItems = document.querySelector(".history-slider");
if (historyItems) {
  const historySlider = new Swiper(historyItems, {
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    },
  });

  historySlider.on("slideChange", function () {
    historyBtns.forEach((el) => {
      el.classList.remove("history-nav__btn--active");
    });
    document
      .querySelector(
        `.history-nav__btn[data-index="${historySlider.realIndex}"]`
      )
      .classList.add("history-nav__btn--active");
  });

  const historyBtns = document.querySelectorAll(".history-nav__btn");
  historyBtns.forEach((el, idx) => {
    el.setAttribute("data-index", idx);
    el.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach((el) => {
        el.classList.remove("history-nav__btn--active");
      });
      e.currentTarget.classList.add("history-nav__btn--active");
      historySlider.slideTo(index);
    });
  });
}
