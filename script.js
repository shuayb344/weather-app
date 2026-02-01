import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';    
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apiKey = 'bb4e15f976abb90a53b233822af06f3d'
async function weather(city){
  const response = await fetch(url + city + `&appid=${apiKey}`);
  const data = await response.json();
  document.querySelector(".city").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
  
  return data;
  
  
}
weather('liverpool');
const today = dayjs();
const date = today.format('dddd, MMMM D');
document.querySelector('.date').innerHTML = date;
const input = document.querySelector('.city-input');
document.querySelector('.search-btn').addEventListener("click", async function(){
  await weather(input.value);
  const image = await weather(input.value).then(data => data.weather[0].main.toLowerCase());
    const iconHtml = `
    <img src="weather-app-img/images/${image}.png" >`
  document.querySelector('.js-weather').innerHTML = iconHtml;
  if(image === 'clouds'){
    document.querySelector('.js-condition').innerHTML = 'Cloudy';
  }else if(image === 'rain'){
    document.querySelector('.js-condition').innerHTML = 'Rainy';
  }else if(image === 'clear'){
    document.querySelector('.js-condition').innerHTML = 'Sunny';
  }else if(image === 'snow'){
    document.querySelector('.js-condition').innerHTML = 'Snowy';
  }
  
   input.value = '';

})
input.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    document.querySelector('.search-btn').click();
  }     
})