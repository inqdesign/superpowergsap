import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const createScroll01 = () => {
  const panels = Array.from(document.querySelectorAll('.sticky-section_panel'));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          scrub: 1,
        },
      })
      // Animate panel
      .to(
        panel,
        {
          ease: 'none',
          startAt: { filter: 'brightness(100%) blur(0px)' },
          filter: isLast ? 'none' : 'brightness(50%) blur(10px)',
          scale: 0.9,
          borderRadius: 40,
        },
        '<'
      );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createScroll01();
});
