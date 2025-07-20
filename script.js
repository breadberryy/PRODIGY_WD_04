let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const form = document.querySelector("form");
const valueSearch = document.getElementById('name');
const city = document.querySelector('.name figcaption');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const clouds = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const resultSection = document.querySelector('.result');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (valueSearch.value.trim() !== '') {
    searchWeather();
  }
});

const searchWeather = () => {
  fetch(url + '&q=' + valueSearch.value)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        city.innerText = data.name;
        temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.querySelector('span').innerText = data.main.temp;
        description.innerText = data.weather[0].description;
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
        resultSection.classList.remove('hidden');
      } else {
        alert("City not found. Try again.");
      }
      valueSearch.value = '';
    });
};
