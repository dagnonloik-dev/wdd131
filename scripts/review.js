let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

const countElement = document.querySelector("#review-count");

if (countElement) {
    countElement.textContent = reviewCount;
}