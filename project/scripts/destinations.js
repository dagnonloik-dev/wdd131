const destinations = [
    {
        name: "Ganvié",
        category: "culture",
        image: "images/ganvie.jpg",
        description:
            "Discover the famous floating village of Ganvié and learn about its unique way of life and culture."
    },
    {
        name: "Porto-Novo",
        category: "culture",
        image: "images/porto_novo.jpg",
        description:
            "Discover Porto-Novo, the capital city of Benin, and explore its museums, traditional architecture, markets, and rich cultural heritage."
    },
    {
        name: "Natitingou",
        category: "nature",
        image: "images/natitingou.jpg",
        description:
            "Explore Natitingou and its surrounding landscapes, discover the traditions of the Atacora region, and experience the natural beauty of northern Benin."
    },
    {
        name: "Route des Esclaves",
        category: "history",
        image: "images/route_esclavage.jpg",
        description:
            "Visit the Route des Esclaves in Ouidah and learn about an important part of Benin's history and cultural heritage."
    },
    {
        name: "Ouidah",
        category: "history",
        image: "images/ouidah.jpg",
        description:
            "Explore Ouidah and discover important historical and cultural sites connected to the history of Benin."
    },
    {
        name: "Pendjari National Park",
        category: "nature",
        image: "images/pendjari.jpg",
        description:
            "Experience the natural beauty of Pendjari National Park and discover its wildlife and landscapes."
    },
    {
        name: "Grand-Popo",
        category: "beach",
        image: "images/grand_popo.jpg",
        description:
            "Relax on the beautiful coast of Grand-Popo and enjoy its beaches, landscapes, and peaceful atmosphere."
    },
    {
        name: "Abomey",
        category: "history",
        image: "images/abomey.jpg",
        description:
            "Discover Abomey and learn about the history and heritage of the former Kingdom of Dahomey."
    }
];


const destinationList = document.querySelector("#destination-list");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const noResults = document.querySelector("#no-results");


function displayDestinations(destinationArray) {

    destinationList.innerHTML = "";

    if (destinationArray.length === 0) {
        noResults.hidden = false;
        return;
    }

    noResults.hidden = true;

    destinationArray.forEach((destination) => {

        const card = document.createElement("article");

        card.classList.add("destination-card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy"
            >

            <div class="destination-card-content">

                <h3>${destination.name}</h3>

                <span class="destination-category">
                    ${destination.category}
                </span>

                <p>
                    ${destination.description}
                </p>

                <a href="plan.html">
                    Plan a Trip
                </a>

            </div>
        `;

        destinationList.appendChild(card);
    });
}


function filterDestinations() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const selectedCategory = categorySelect.value;

    const filteredDestinations = destinations.filter((destination) => {

        const matchesSearch = destination.name.toLowerCase().includes(searchTerm);

        const matchesCategory = selectedCategory === "all" || destination.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });
    displayDestinations(filteredDestinations);
}

searchInput.addEventListener("input", filterDestinations);
categorySelect.addEventListener("change", filterDestinations);

displayDestinations(destinations);