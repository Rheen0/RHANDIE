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
    start: "top center",
    end: "bottom top",
    scrub: true,
    // markers: true,
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
  scale: 25,
  rotation: 120,
  ease: "power2.out",
});

// Background color
gsap.to("body", {
  backgroundColor: "#ffffff", // White
  scrollTrigger: {
    trigger: ".star",
    start: "top 45%",
    end: "bottom top",
    scrub: true,
    // markers: true,
  },
});

// Font size
gsap.to(".RHANDIE h1", {
  fontSize: "8rem", 
  scrollTrigger: {
    trigger: ".star",
    start: "top center",
    end: "bottom top",
    scrub: true,
    // markers: true,
  },
});

gsap.from(".accomplishments h1", {
  scrollTrigger: {
    trigger: ".accomplishments",
    start: "top 80%", 
    end: "bottom top", 
    scrub: true, 
    // markers: true, 
  },
  opacity: 0, 
  x: "-50vw", 
  fontSize: "1rem",
  duration: 1.5,
  ease: "power2.out", 
//   markers: true,
  onComplete: () => {
    gsap.to(".accomplishments h1", { fontSize: "12rem" });
  },
});
