
<script>
// Global variables
const preloaderTL = gsap.timeline();
// Create SplitType elements
const heading = new SplitType("#heading", { types: "chars" });
const heroKicker = new SplitType(".digital-text", { types: "chars" });
  gsap.set("#heading", { autoAlpha: 1 }); // prevents flash of unstyled content
  gsap.set(heading.chars, { yPercent: 100 }); // set initial state

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);


  // Page Load Animation


  // User Scroll Animation
  function activateScrollTrigger() {
    gsap.to(text.chars, {
      yPercent: -100,
      delay: 0.5,
      stagger: { from: "center", amount: 1 },
      scrollTrigger: {
        trigger: "#heading",
        start: "top top",
        end: () => `+=${document.querySelector("#heading").offsetHeight * 0.5}`,
        scrub: 1
        // markers: true
      }
    });
  }
})



// Preloader + Intro Animation
let loadTl = gsap.timeline();
  loadTl.from(
    heroKicker.chars,
    {
      opacity: 0,
      duration: 1.5,
      stagger: {
        each: 0.005,
        from: "random"
      }
    },
  )
   loadTl.from(
    heading.chars,
    {
    yPercent: 0,
    ease: "sine.out",
    stagger: { from: "center", amount: 0.4, ease: "power1.in" },
    onComplete: activateScrollTrigger
      }
    },
    "<0.5"
  )
});

// Random Type
document.addEventListener("DOMContentLoaded", function () {
  function animateText(className) {
    const elements = document.querySelectorAll(`.${className}`);
    const splitTextArray = Array.from(elements).map(
      (element) => new SplitType(element, { type: "chars" })
    );
    splitTextArray.forEach((splitTextInstance) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextInstance.chars,
          start: "top bottom",
          end: "top center"
        }
      });
      timeline.from(splitTextInstance.chars, {
        opacity: 0,
        duration: 0.000003,
        stagger: {
          each: 0.055,
          from: "random"
        }
      });
    });
  }

});

</script>
