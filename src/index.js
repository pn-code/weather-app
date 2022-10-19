import "./style.css";
import getWeather from "./getWeather";
import logo from "./img/logo.svg";

const logoImg = document.getElementById("logo")
logoImg.src = logo;

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", getWeather);




