import addWeatherItem from "./add-weather";

export default
function getWeather(){
    let API = '036ff69bdfee4e9097ce8bc3e7d1e486'
    let cityName = document.querySelector('.input-city-name').value
    let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
    cityName +'&limit=5&appid='+ API;

    cityName.replace(" ", "+");

    fetch(weatherAPI,{
        mode: 'cors'
    })
      .then(async function(response) {
          return response.json();
      })
      .then(function(response){
        addWeatherItem(response.main.temp, response.name + " , " + 
        response.sys.country);

      })
      .catch(function(err) {
          alert("Weather could not be loaded.")
      });



};
