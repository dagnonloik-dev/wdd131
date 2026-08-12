const params = new URLSearchParams(window.location.search);

const name = params.get("name") || "Not provided";
const email = params.get("email") || "Not provided";
const destination = params.get("destination") || "Not provided";
const travelDate = params.get("travelDate") || "Not provided";
const travelers = params.get("travelers") || "Not provided";
const comments = params.get("comments") || "Not provided";
const interests = params.getAll("interests");

document.querySelector("#review-name").textContent = name;
document.querySelector("#review-email").textContent = email
document.querySelector("#review-destination").textContent = destination;
document.querySelector("#review-date").textContent = travelDate;
document.querySelector("#review-travelers").textContent = travelers;
document.querySelector("#review-comments").textContent = comments;

const interestsElement = document.querySelector("#review-interests");

if (interests.length > 0) {

   interestsElement.textContent = interests.join(", ");
   
} else {
   interestsElement.textContent = "None selected";
}

let reviewCount = Number(localStorage.getItem("travelPlansCompleted")) || 0;

reviewCount += 1;
localStorage.setItem("travelPlansCompleted",reviewCount);

document.querySelector("#review-count").textContent = reviewCount;