/*const selections = Splitting();*/

/*gsap.registerPlugin(ScrollTrigger);

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
});*/

/*const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 650);
});

gsap.ticker.lagSmoothing(0);*/

//navbar burger

//--------déclaration des variables--------------
const burger = document.getElementById("burger-cross");
const headBar = document.getElementById("head_bar");
const basicformule = document.getElementById("basicformule");
const croissanceformule = document.getElementById("croissanceformule");
const expertformule = document.getElementById("expertformule");

burger.addEventListener("click", () => {
  headBar.classList.toggle("active");
});

function scrollToBesoin() {
  let besoinElement = document.getElementById("besoin");
  let offsetBottom =
    besoinElement.getBoundingClientRect().top + window.pageYOffset - 50;
  let duration = 800; // Durée de l'animation en millisecondes
  let start = window.pageYOffset;
  let startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    let now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    let time = Math.min(1, (now - startTime) / duration);
    let timeFunction = easeInOutQuad(time);
    window.scroll(0, Math.ceil(timeFunction * (offsetBottom - start) + start));

    if (Math.abs(window.pageYOffset - offsetBottom) < 1 || time >= 1) {
      return;
    }

    requestAnimationFrame(scroll);
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  scroll();
}

function isFormule(formule) {
  switch (formule) {
    case basicformule:
      localStorage.setItem("isBasique", true);
      localStorage.setItem("isCroissance", false);
      localStorage.setItem("isExpert", false);
      console.log("isBasique : ");
      console.log(localStorage.getItem("isBasique"));
      break;

    case croissanceformule:
      localStorage.setItem("isCroissance", true);
      localStorage.setItem("isBasique", false);
      localStorage.setItem("isExpert", false);
      console.log("isCroissance : ");
      console.log(localStorage.getItem("isCroissance"));
      break;
    case expertformule:
      localStorage.setItem("isExpert", true);
      localStorage.setItem("isBasique", false);
      localStorage.setItem("isCroissance", false);
      console.log("isExpert : ");
      console.log(localStorage.getItem("isExpert"));
      break;
  }
}

function chooseFormule(formule) {
  let beforeElement = document.getElementsByClassName("middle_formule")[0];
  beforeElement.classList.remove("middle_formule");
  beforeElement.classList.add("side_formule");
  formule.classList.toggle("side_formule");
  formule.classList.toggle("middle_formule");
  isFormule(formule);
}

function obetnirUnDevis() {
  window.location.href = "../contact/contact.html";
}

function isFormuleTrue() {
  // Récupération des valeurs depuis le localStorage
  const isBasique = localStorage.getItem("isBasique") === "true";
  const isCroissance = localStorage.getItem("isCroissance") === "true";
  const isExpert = localStorage.getItem("isExpert") === "true";

  // Affichage des valeurs pour vérification
  console.log("isBasique : ", isBasique);
  console.log("isCroissance : ", isCroissance);
  console.log("isExpert : ", isExpert);

  // Conditions basées sur les valeurs récupérées
  if (isBasique) {
    document.getElementById("formule_basique").checked = true;
    console.log("basique checked");
  } else if (isCroissance) {
    document.getElementById("formule_croissance").checked = true;
    console.log("croissance checked");
  } else if (isExpert) {
    document.getElementById("formule_expert").checked = true;
    console.log("expert checked");
  }
}

function croissanceByDefault() {
  localStorage.setItem("isCroissance", true);
  localStorage.setItem("isBasique", false);
  localStorage.setItem("isExpert", false);
  console.log("Croissance is selected by default");
}
