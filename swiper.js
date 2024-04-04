const swiper = new Swiper(".swiper.is-slider-main", {
  slidesPreView: "auto",
  spaceBetween: 16,
  loop: true,
  speed: 400,
  spaceBetween: 100,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
