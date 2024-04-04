$(".slider-releases_component").each(function (index) {
  let parentSection = $(this).closest(".section");

  const listSwiper = new Swiper($(this).find(".swiper.is-slider-list")[0], {
    slidesPerView: "auto",
    speed: 500,
    loop: true,
    loopedSlides: 4,
    direction: "vertical",
    slideToClickedSlide: true,
    mousewheel: {
      forceToAxis: true
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });

  const photoSwiper = new Swiper($(this).find(".swiper.is-slider-photo")[0], {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    loopedSlides: 4,
    keyboard: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      scale: 0.8,
      slideShadows: false
    }
  });

  listSwiper.controller.control = photoSwiper;
  photoSwiper.controller.control = listSwiper;

  photoSwiper.on("activeIndexChange", function (e) {
    let slideColor = $(e.slides[e.activeIndex]).find(".slider-photo_color").text();
    parentSection.css("background-color", slideColor);
  });

  $(this).find(".swiper-bullet").each(function (index) {
    $(this).text(index + 1);
  });
});
