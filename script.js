
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c2d52a0a7bmsh0885257f04179cap1eacddjsn60713ce3009e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityname.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(Response => Response.json())
    .then((response) => {


      console.log(response)

      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Pune")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
  .then(Response => Response.json())
  .then((response) => {


    console.log(response)

    tempNY.innerHTML = response.temp
    flNY.innerHTML = response.feels_like
    humiNY.innerHTML = response.humidity
    min_tempNY.innerHTML = response.min_temp
    max_tempNY.innerHTML = response.max_temp
    wind_speedNY.innerHTML = response.wind_speed


  })
  .catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
  .then(Response => Response.json())
  .then((response) => {


    console.log(response)

    tempSG.innerHTML = response.temp
    flSG.innerHTML = response.feels_like
    humiSG.innerHTML = response.humidity
    min_tempSG.innerHTML = response.min_temp
    max_tempSG.innerHTML = response.max_temp
    wind_speedSG.innerHTML = response.wind_speed


  })
  .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
  .then(Response => Response.json())
  .then((response) => {


    console.log(response)

    tempDB.innerHTML = response.temp
    flDB.innerHTML = response.feels_like
    humiDB.innerHTML = response.humidity
    min_tempDB.innerHTML = response.min_temp
    max_tempDB.innerHTML = response.max_temp
    wind_speedDB.innerHTML = response.wind_speed



  })
  .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
  .then(Response => Response.json())
  .then((response) => {


    console.log(response)

    tempKL.innerHTML = response.temp
    flKL.innerHTML = response.feels_like
    humiKL.innerHTML = response.humidity
    min_tempKL.innerHTML = response.min_temp
    max_tempKL.innerHTML = response.max_temp
    wind_speedKL.innerHTML = response.wind_speed


  })
  .catch(err => console.error(err));

