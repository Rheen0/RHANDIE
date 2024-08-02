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
    end: "bottom 10%",
    scrub: true,
      markers: true,
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
    start: "top 65%",
    end: "bottom 10%",
    scrub: 0.3, // Adjust this value for different transition speeds (in seconds)
    // markers: true,
  },
});

// Font size
gsap.to(".RHANDIE h1", {
  fontSize: "5rem",
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
    start: "center 90%",
    end: "center center",
    scrub: true,
    // markers: true
  },
  opacity: 0,
  x: "-50vw", // Responsive left shift by 50% of the viewport width
  fontSize: "9rem", // Start with a smaller font size
  // rotation: -30, // Initial rotation
  duration: 1.5,
  ease: "power2.out",
  onComplete: () => {
    // Ensure the final state is correctly set after animation
    gsap.to(".accomplishments h1", {
      fontSize: "12rem", // Final font size as defined in CSS
      rotation: 0, // Reset rotation to 0
      ease: "power2.out",
    });
  },
});

// Animate the h2 tag in the description section
gsap.from(".description h2", {
  scrollTrigger: {
    trigger: ".description",
    start: "top 90%",
    end: "bottom 35%",
    scrub: true,
    // markers: true
  },
  // x: "-50vw",
  // rotation: -3, // Initial rotation
  opacity: 0, // Start from invisible
  duration: 0.5,
  ease: "power2.out",
});

// Animate the p tags in the description section
gsap.from(".description p", {
  scrollTrigger: {
    trigger: ".description",
    start: "top 90%",
    end: "bottom 35%",
    scrub: true,
    // markers: true
  },
  // rotation: -3,

  opacity: 0, // Start from invisible
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.2, // Stagger the animation for each p element
  delay: 1
});

// Animate images inside the description section


const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

class DragScroll {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.wrap = document.querySelector(obj.wrap);
    this.items = document.querySelectorAll(obj.item);
    // Removed reference to the progress bar
    this.init();
  }

  init() {
    this.progress = 0;
    this.speed = 0;
    this.oldX = 0;
    this.x = 0;
    this.playrate = 0;

    this.bindings();
    this.events();
    this.calculate();
    this.raf();
  }

  bindings() {
    [
      "events",
      "calculate",
      "raf",
      "handleWheel",
      "move",
      "handleTouchStart",
      "handleTouchMove",
      "handleTouchEnd",
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  calculate() {
    this.progress = 0;
    this.wrapWidth = Array.from(this.items).reduce(
      (width, item) => width + item.clientWidth,
      0
    );
    this.wrap.style.width = `${this.wrapWidth}px`;
    this.maxScroll = this.wrapWidth - this.el.clientWidth;
  }

  handleWheel(e) {
    this.progress += e.deltaY;
    this.move();
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.dragging = true;
    this.startX = e.clientX || e.touches[0].clientX;
  }

  handleTouchMove(e) {
    if (!this.dragging) return false;
    const x = e.clientX || e.touches[0].clientX;
    this.progress += (this.startX - x) * 2.5;
    this.startX = x;
    this.move();
  }

  handleTouchEnd() {
    this.dragging = false;
  }

  move() {
    this.progress = clamp(this.progress, 0, this.maxScroll);
  }

  events() {
    window.addEventListener("resize", this.calculate);
    window.addEventListener("wheel", this.handleWheel);

    this.el.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);

    window.addEventListener("mousedown", this.handleTouchStart);
    window.addEventListener("mousemove", this.handleTouchMove);
    window.addEventListener("mouseup", this.handleTouchEnd);
    document.body.addEventListener("mouseleave", this.handleTouchEnd);
  }

  raf() {
    this.x = lerp(this.x, this.progress, 0.1);
    this.playrate = this.x / this.maxScroll;

    this.wrap.style.transform = `translate(${-this.x}px)`;

    this.speed = Math.min(100, this.oldX - this.x);
    this.oldX = this.x;

    this.scale = lerp(this.scale, this.speed, 0.1);
    this.items.forEach((item) => {
      item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
      item.querySelector("img").style.transform = `scaleX(${
        1 + Math.abs(this.speed) * 0.004
      })`;
    });
  }
}

const scroll = new DragScroll({
  el: ".slider",
  wrap: ".slider-wrapper",
  item: ".slider-item",
  // Removed the progress bar reference
});

const animateScroll = () => {
  requestAnimationFrame(animateScroll);
  scroll.raf();
};

animateScroll();
