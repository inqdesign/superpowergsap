document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to animate text characters
    function animateText(selector, delay, duration) {
        const text = new SplitType(selector, { types: "chars" });
        gsap.set(selector, { autoAlpha: 1 }); // Prevents flash of unstyled content
        gsap.set(text.chars, { yPercent: 100 }); // Set initial state

        // Animation for the text
        const animation = gsap.to(text.chars, {
            yPercent: 0,
            delay: delay,
            duration: duration, // Set the duration manually
            ease: "sine.out",
            stagger: { from: "center", amount: 0.5, ease: "power1.out" },
            onComplete: () => {
                // Activate ScrollTrigger after the animation completes
                activateScrollTrigger(selector);
            }
        });

        return animation;
    }

    // Function to activate ScrollTrigger for the text
    function activateScrollTrigger(selector) {
        const element = document.querySelector(selector);
        gsap.to(selector, {
            yPercent: -100,
            stagger: { from: "center", amount: 1 },
            scrollTrigger: {
                trigger: element,
                start: "top top",
                end: () => `+=${element.offsetHeight * 0.25}`,
                scrub: 1
            }
        });
    }

    // Animation for the digital text
    const digitalTextAnimation = () => {
        const digitalText = new SplitType(".digital-text", { types: "chars" });
        const tl = gsap.timeline();
        tl.from(digitalText.chars, {
            delay: 3.5,
            opacity: 0,
            duration: 1.5,
            stagger: { each: 0.05, from: "random" }
        });
    };

    // Animation for the first heading (faster animation)
    const firstHeadingAnimation = animateText("#heading1", 5.5, 1); // Manually set duration to 2 seconds

    // Animation for the second heading with a delay of 1 second
    const secondHeadingAnimation = animateText("#heading2", 6.5, "auto"); // Let the duration be automatically calculated based on characters

    // Combine the timelines to play them in sequence
    const combinedTimeline = gsap.timeline();
    combinedTimeline.add(digitalTextAnimation()).add(firstHeadingAnimation).add(secondHeadingAnimation);
});
