gsap.registerPlugin(ScrollTrigger);


// Scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Header Elements
gsap.to(".RHANDIE h1", {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "power2.out",
});

gsap.to(".RHANDIE ul li", {
  duration: 1,
  opacity: 1,
  y: 0,
  ease: "power2.out",
  stagger: 0.2,
});
// Star
gsap.to(".star img", {
    scrollTrigger: {
      trigger: ".star",
      start: "top 65%",
      end: "bottom",
      scrub: true,
    //   markers: true,
      onEnter: () => {
        gsap.to(".star img", { opacity: 1 });
        document.querySelector(".star img").classList.add("no-levitate");
        document.querySelector(".star img").classList.add("default-properties"); // Restore default properties
      },
      onLeaveBack: () => {
        gsap.to(".star img", { opacity: 1 });
        document.querySelector(".star img").classList.remove("no-levitate");
        document
          .querySelector(".star img")
          .classList.remove("default-properties"); // Remove default properties class
      },
      onEnterBack: () => {
        gsap.to(".star img", { opacity: 1 });
        document.querySelector(".star img").classList.add("default-properties"); // Restore default properties
      },
      onLeave: () => {
        gsap.to(".star img", { opacity: 0 });
        document
          .querySelector(".star img")
          .classList.remove("default-properties"); // Remove default properties class
      },
    },
    scale: "100vh 100vw",
    rotation: 180,
    ease: "power2.out",
  });
  

gsap.to("body", {
    backgroundColor: "#ffffff", // White
    scrollTrigger: {
      trigger: ".star",
      start: "top 45%",
      end: "bottom center",
      scrub: 0.3, // Adjust this value for different transition speeds (in seconds)
      // markers: true,
    },
  });
  

// Font size
gsap.to(".RHANDIE h1", {
  fontSize: "2rem", 
  scrollTrigger: {
    trigger: ".star",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    // markers: true,
  },
});

gsap.from(".accomplishments h1", {
    scrollTrigger: {
        trigger: ".accomplishments",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
        // markers: true
    },
    opacity: 0,
    x: "-50vw", // Responsive left shift by 50% of the viewport width
    fontSize: "9rem", // Start with a smaller font size
    rotation: -30, // Initial rotation
    duration: 1.5,
    ease: "power2.out",
    onComplete: () => {
        // Ensure the final state is correctly set after animation
        gsap.to(".accomplishments h1", {
            fontSize: "12rem", // Final font size as defined in CSS
            rotation: 0, // Reset rotation to 0
            ease: "power2.out"
        });
    }
});

// Animate the h2 tag in the description section
gsap.from(".description h2", {
    scrollTrigger: {
        trigger: ".description",
        start: "top 70%",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    rotation: -3, // Initial rotation
    opacity: 0, // Start from invisible
    duration: 1.5,
    ease: "power2.out"
});

// Animate the p tags in the description section
gsap.from(".description p", {
    scrollTrigger: {
        trigger: ".description",
        start: "top 70%",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    rotation: -3,
    opacity: 0, // Start from invisible
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2 // Stagger the animation for each p element
});

// Animate images inside the description section
gsap.from(".description img", {
    scrollTrigger: {
        trigger: ".description",
        start: "top 70%",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
    opacity: 0, // Start from invisible
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3 // Stagger the animation for each image element
});