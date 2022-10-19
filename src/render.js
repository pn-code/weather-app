export default 
function render(currentTemp, currentLocation, currentWeather, currentHumidity, currentWind) {
    const inputCityName = document.querySelector(".input-city-name")
    inputCityName.innerText = "";

    const temperature = document.querySelector(".temperature");
    temperature.innerText = `${currentTemp} °C`;

    const location = document.querySelector(".location");
    location.innerText = currentLocation;

    const weather = document.querySelector(".weather");
    weather.innerText = currentWeather;

    const humidity = document.querySelector(".humidity");
    humidity.innerText = currentHumidity;

    const wind = document.querySelector(".wind");
    wind.innerText = currentWind;

    console.log("Search executed...")
};