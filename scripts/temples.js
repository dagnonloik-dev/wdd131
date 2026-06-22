let currentYear = new Date().getFullYear();
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const h1 = document.querySelector("header h1");

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.classList.toggle("show");
    h1.classList.toggle("show");
});

