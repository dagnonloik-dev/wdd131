let area = document.getElementById("area");
let population = document.getElementById("population");
let capital = document.getElementById("capital");
let languages = document.getElementById("languages");
let currency = document.getElementById("currency");
let timeZone = document.getElementById("timeZone");
let callingCode = document.getElementById("callingCode");
let internetTLD = document.getElementById("internetTLD");
let temperature = document.getElementById("temperature");
let windChill = document.getElementById("windChill");
let conditions = document.getElementById("conditions");
let wind = document.getElementById("wind");

area.textContent = "114,763 sq km";
population.textContent = "14,110,000 (approx.)";
capital.textContent = "Porto-Novo";
languages.textContent = "French";
currency.textContent = "West African (XOF)";
timeZone.textContent = "UTC+1";
callingCode.textContent = "+229";
internetTLD.textContent = ".bj";

function calculateWindChill(temperature, windSpeed) {
    let windChill ;
    if(temperature <= 10 && windSpeed > 4.8){
        windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + "°C";
    }else{
        return "N/A";
    }
    
}

let windSpeed = 12;
let temperatureValue = 8;

temperature.textContent = temperatureValue + "°C";
conditions.textContent = "Sunny";
wind.textContent = windSpeed + " km/h";
let windChillValue = calculateWindChill(temperatureValue, windSpeed);

windChill.textContent = windChillValue ;   


