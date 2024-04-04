
// Show overlay
function showOverlay() {
    $(".drawer-wrapper").show();
    $("body").addClass("no-scroll");
}

// Hide overlay
function hideOverlay() {
    $(".drawer-wrapper").hide();
    $("body").removeClass("no-scroll");
}
// video overlay play button
document.addEventListener("DOMContentLoaded", function() {
    // Get all video cover elements
    var videoCovers = document.querySelectorAll('.video-cover');

    // Iterate over each cover
    videoCovers.forEach(function(videoCover) {
        // Add click event listener
        videoCover.addEventListener('click', function() {
            // Hide the video cover
            this.style.display = 'none';

            // Get the video element
            var video = this.nextElementSibling;

            // Play the video
            video.play();
        });
    });
});


  
  $(".slider-main_component").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
     slidesPerView: 4.5,
     spaceBetween: 16,
     speed: 600,
     keyboard: true,
     mousewheel: {
      	forceToAxis: true
      },
     followFinger: false,

			navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-pre")[0],
        disabledClass: "is-disabled"
       }
     });


  });


