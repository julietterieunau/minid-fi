// lien entre html et js 
const modeBtn = document.querySelector("#modeBtn");
const colorCode = document.querySelector("#colorCode");

// définition des actons qui seront exécutées lorsque je clique sur le bouton
modeBtn.addEventListener("click", function () {

    const couleur = "#" + Math.floor(Math.random() * 167777215).toString(16); // Choisir une code couleur au hasard
    document.body.style.backgroundColor = couleur;     // changer le fond

    // afficher la couleur
    colorCode.textContent = couleur;
});



