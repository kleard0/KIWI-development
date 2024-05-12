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
    stagger: 0.05, // Temps entre le début des animations des caractères successifs
    scrollTrigger: {
      trigger: selection.el,
      start: "top 97%", // Quand le haut de `selection.el` entre 97% du viewport
      end: "bottom 100%", // Quand le bas de `selection.el` sort totalement du viewport
    },
    duration: 0.01, // Durée réduite de l'animation pour chaque caractère
  });
});

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 650);
});

gsap.ticker.lagSmoothing(0);

//navbar burger

const burger = document.getElementById("burger-cross");
const headBar = document.getElementById("head_bar");
console.log(headBar);
console.log(burger);

burger.addEventListener("click", () => {
  headBar.classList.toggle("active");
});
