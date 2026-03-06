// Stocke une référence vers le <h1> dans une variable
const monTitre = document.querySelector("h1");
// Met à jour le contenu texte du <h1>
monTitre.textContent = "Hello world !";

const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/hallederiz.png") {
    monImage.setAttribute("src", "images/lbp1opaque.png");
  } else {
    monImage.setAttribute("src", "images/lbp1.png");
  }
});

const lesElements = document.querySelectorAll("li");

function changerValidation(e) {
  if (!e.target.className) {
    e.target.className = "fini";
  } else {
    e.target.className = "";
  }
}

lesElements.forEach((element) => {
  element.addEventListener("click", changerValidation);
});

let monBouton = document.querySelector("button");
//let monTitre = document.querySelector("h1");

function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", monNom);
  monTitre.textContent = `Mozilla est génial, ${monNom}`;
}

if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitre.textContent = `Mozilla est génial, ${nomEnregistre}`;
}

monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});