const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 3000,
  },

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 160,
    modifier: 0.8,
    slideShadows: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    560: {
      slidesPerView: 3,
    },
    990: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
