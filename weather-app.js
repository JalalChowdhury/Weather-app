// Decleare different DOM  id
const differentBG = document.getElementById('different-bg');

const searchInput = document.getElementById('search-feild');
const searchButton = document.getElementById('search-button');

const weatherDetail = document.getElementById('weather-detail');
const icon = document.getElementById('weather-detail');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const lead = document.getElementById('lead');
const errorMessage = document.getElementById('error-message');

// fau api link
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=a3b5f59cfcb6d1f5a3a88380cb2d8649';
const imgApi = 'https://api.unsplash.com/search/photos';
const imgApiKey = 'oj9mWi6oAIts4F-TQAB8JHa5MqXbacXzYBr5XucEcZg';


searchButton.addEventListener('click',function (){

    const searchText = searchInput.value;

    const apiUrl = `${api}${searchText}${apiKey}`;
    // console.log(apiUrl);
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if(data.code == "404"){
                displayError();

            }
            else{
                displayTemperature(data);
            }
        })
})

const displayTemperature = data => {
    // console.log(data);
    
    weatherDetail.style.display = "block";
    errorMessage.style.display = "none";

    const div = document.createElement('div');
    
    iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.src = iconUrl;
    cityName.innerText = data.name;
    temp.innerText = Math.round(data.main.temp - 273);
    lead.innerText = weather[0].main ;
    
   
}

const displayError = () => {

     
    weatherDetail.style.display = "none";
    errorMessage.style.display = "block";



}

