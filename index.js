const toogle = document.getElementById("toogle");
const navbar = document.querySelector(".nav-links"); // On cible la liste de liens

toogle.addEventListener("click", () => {
    navbar.classList.toggle("apparait");
});