import "./style.css";
import getWeather from "./api-weather";

const addBtn = document.querySelector("button");

addBtn.addEventListener("click", getWeather)