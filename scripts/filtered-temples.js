const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const h1 = document.querySelector("header h1");

const container = document.querySelector(".container");
const home = document.querySelector("#home")
const old = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const small = document.querySelector("#small");
const large = document.querySelector("#large");
const title = document.querySelector("main h2");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Burley Idaho",
    location: "Burnley Idaho, United States",
    dedicated: "2026, January, 11",
    area: 45300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/burley-idaho-temple/burley-idaho-temple-65243-main.jpg"
  },
  {
    templeName: "Kumasi Ghana",
    location: "Kumasi, Ghana",
    dedicated: "2025,October ,18 ",
    area: 22750,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
  }
  // Add more temple objects here...
];


menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuButton.classList.toggle("show");
    h1.classList.toggle("show");
});

function createCard(temples){
    container.innerHTML = "";

    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });    
}

createCard(temples);

home.addEventListener("click", ()=>{
    createCard(temples);
    title.textContent = "Home";
});

old.addEventListener('click', () => {
    createCard(temples.filter(temple => 
        parseInt(temple.dedicated.slice(0, 4), 10) < 1900
    ));
    title.textContent = "Old"
});

newTemples.addEventListener('click', () => {
    createCard(temples.filter(temple => 
        parseInt(temple.dedicated.slice(0, 4), 10) > 2000
    ));
    title.textContent = "New"
});

large.addEventListener('click', () => {
    createCard(temples.filter(temple =>
        temple.area > 90000
    ))
    title.textContent = "Large"
});

small.addEventListener('click', () => {
    createCard(temples.filter(temple =>
        temple.area < 10000
    ))
    title.textContent = "Small"
});



