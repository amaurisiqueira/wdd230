 const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');
const weatherSky = document.querySelector('.weather-sky');


const weatherHumidityTitle= document.querySelector('.weather-humidity-title');
const weatherWind= document.querySelector('.weather-wind');
const weatherWindValue= document.querySelector('.weather-wind-value');
 
/*
 <p class="weather-humidity-title">Humidity</p>
                        <figure>  <img id="weather-icon" src="any" alt="none"> </figure> 
                        <span id="current-temp">    </span> 
                        <p class="weather-sky">Weather</p>
                        <p class="weather-humidity-title">Humidity</p>
                        <p class="weather-humidity">35%</p>
                        <p class="weather-wind">Wind chill</p>
                        <p class="weather-wind-value">N/A </p>
        

*/
  
const url = 'https://api.openweathermap.org/data/2.5/weather?id=524901&appid=39f5f22a4a35bb116ebde22d5c4951bf&lat=-33.45694&lon=-70.64827&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            getResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        // console.log(error);
    }
}
 
apiFetch();

function getResults(data) {



    /*
    currentTemp.innerHTML = `${data.main.temp}&deg;F -`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
                     <p class="weather-sky">Weather</p>
                    <p class="weather-humidity-title">Humidity</p>
                    <p class="weather-humidity">35%</p>
                    <p class="weather-wind">Wind chill</p>
                    <p class="weather-wind-value">N/A </p>
    
    */
    // console.log(data);

    // console.log(data.wind.speed);
    // console.log(data.wind.deg);


      weatherWind.innerHTML =`${data.wind.speed} knots`;
      weatherWindValue.innerHTML=`${data.wind.deg}&deg;`;
 

    // console.log(data.weather[0]);
    weatherHumidityTitle.innerHTML = `${data.name}`;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherSky.innerHTML = `${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);




    //captionDesc.textContent = desc;
}
