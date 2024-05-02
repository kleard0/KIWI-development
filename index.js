const svg = this.document.getElementById("Layer_1");
const resumeHearder = document.getElementById("resume_header");
const section = document.querySelector("section");

window.addEventListener("scroll", function (e) {
  const observer = new IntersectionObserver((entries) => {
    for (entry of entries) {
      if (entry.intersectionRatio === 1) {
        svg.style.visibility = "visible";
      } else {
        svg.style.visibility = "hidden";
      }
    }
  });

  observer.observe(resumeHearder);
});

const selections = Splitting();

gsap.registerPlugin(ScrollTrigger);

selections.forEach((selection) => {
  gsap.from(selection.chars, {
    color: "white",
    stagger: 0.05,
    scrollTrigger: {
      trigger: selection.el,
      start: "top 97%",
      end: "bottom 100%",
      scrub: 1,
    },
  });
});

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 650);
});

gsap.ticker.lagSmoothing(0);
