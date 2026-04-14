// On récupère le bouton (le toggle) et la liste des liens (la navbar)
const toogle = document.getElementById("toogle");
const navbar = document.getElementById("navbar");

// On vérifie dans la console si les éléments sont bien trouvés
console.log("Bouton trouvé :", toogle);
console.log("Menu trouvé :", navbar);

// Au clic, on ajoute ou on enlève la classe "apparait"
toogle.addEventListener("click", () => {
    navbar.classList.toggle("apparait");
});