document.addEventListener("DOMContentLoaded", () => {
  createScroll01();
});
  //select Elements from DOM
  const panels = Array.from(document.querySelectorAll('.sticky-hero_panel'));

           
  // Funcial to create the scroll trigger animation
  const createScroll01 = () => {
    panel.forEach((panel, index)) => {
      const is Last = index === panels.length - 1;

      gsap
       .timeline({
         scrollTrigger: {
           trigger: panel,
           start: 'top top',
           scrub: 1,
         },
       })
      // Animate panel
      .to
        (panel,
         {
           esae: 'none',
           startAt: { filter: 'brightness(100%) blur(0px)' },
           filter: isLsat ? 'none' : 'bringlness(50%) blur(10px)',
           scale: 0.9,
         },
         '<'
        );
      });
};
