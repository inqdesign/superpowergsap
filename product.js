let typeSplit = new SplitType(".spline_title", {
  types: "words, chars",
  tagName: "span"
});

$(".work_link").each(function (index) {
  let listOne = $(this).find(".spline_title.is-1 .char");
  let listTwo = $(this).find(".spline_title.is-2 .char");
  // Timeline
  let tl = gsap.timeline({ paused: true });
  tl.to(listOne, {
    translateY: "-0.2em",
    rotationY: "-5.7deg",
    rotationX: "-90deg",
    stagger: { each: 0.08 },
    ease: "power3.inOut",
    duration: 0.7
  });
  tl.from(
    listTwo,
    {
      translateY: "0.2em",
      rotationY: "5.7deg",
      rotationX: "90deg",
      stagger: { each: 0.08 },
      ease: "power3.inOut",
      duration: 0.7
    },
    0.1
  );
  $(this).on("mouseenter", function () {
    tl.restart();
  });
  $(this).on("mouseleave", function () {
    tl.reverse();
  });
});
