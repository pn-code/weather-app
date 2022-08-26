import "./style.css";
import getWeather from "./api-weather";

const addBtn = document.querySelector("button");
const tempUnits = Array.from(document.querySelectorAll(".weather-item-temp"))
let units = 'metric';

addBtn.addEventListener("click", getWeather)

function changeTemperatureUnits(){
    if(units === 'metric'){
        units = 'imperial';
    } else if (units === 'imperial'){
        units = 'metric';
    }
}

tempUnits.map((item)=>{
    item.addEventListener("click", () => {
        changeTemperatureUnits()
        console.log(units);
    })
})