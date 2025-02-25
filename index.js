

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

alert("We la cité la ouaiis !!")