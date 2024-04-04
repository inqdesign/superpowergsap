const teamSlider = new Swiper(".swiper.is-team", {
  // Parameters
  slidesPerView: 1.5,
  spaceBetween: 16,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
    },
  },
});
