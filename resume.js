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
