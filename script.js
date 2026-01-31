const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apiKey = 'bb4e15f976abb90a53b233822af06f3d'
async function weather(city){
  const response = await fetch(url + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  
}
weather('')