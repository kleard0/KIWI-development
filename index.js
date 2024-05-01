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

console.log(selections);

gsap.registerPlugin(ScrollTrigger);

// On fait une boucle qui parcour toute la liste dans "selections"
selections.forEach((selection) => {
  //on créer l'animation
  gsap.from(selection.chars, {
    color: "wheat", //on
    stagger: 0.05, // petit décalage
    scrollTrigger: {
      trigger: selection.el, //selectionner chaque élément de la liste
      start: "top 98%",
      end: "bottom 98%",
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
