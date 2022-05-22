const EMIL = ["1906267d037b","","18f43320c26","","985d90f04"];

const weatherDOM = document.querySelector(".js-weather");

const displayWeather = (city, temp, weather) => {
  weatherDOM.innerText = `${city} ${temp}ºC ${weather}`;
  setTimeout(() => {
    weatherDOM.classList.add(ACTIVE_CLASS_NAME);
  }, 900);
}

const onSuccess = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${EMIL.map((replicant) => {return replicant}).join('')}&units=metric`;
  const weatherData = await (await fetch(url)).json();

  const temp = Math.floor(weatherData.main.temp).toFixed();
  const city = weatherData.name;
  const weather = weatherData.weather[0].main;
  displayWeather(city, temp, weather);
}

const onFail = () => {
  console.log("■ Without your consense, the system cannot display the current weather.");
}

navigator.geolocation.getCurrentPosition(onSuccess, onFail);