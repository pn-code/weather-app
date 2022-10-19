import render from "./render";

export default function getWeather(){
    const API = '036ff69bdfee4e9097ce8bc3e7d1e486';
    const cityName = document.querySelector('.input-city-name').value.replace(" ", "+");
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`

    if (cityName === "") {
        alert("Please enter a city...")
    } else {
        console.log(weatherAPI)
        fetch(weatherAPI, {
            mode: 'cors'
        })
          .then(resp => {
              return resp.json();
          })
          .then(resp => {
            render(resp.main.temp, `${resp.name}, ${resp.sys.country}`, `${resp.weather[0].main}; ${resp.weather[0].description}`, `Humidity: ${resp.main.humidity} %`, `Wind: ${Math.round(resp.wind.speed * 2.23694)} mph`)
          })
          .catch(err => {
              alert(`The city called ${cityName} could not be loaded.`);
              console.log(err);
          });
    }
};
