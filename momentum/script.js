import playList from '../playList.js';

// watch and date
const time = document.querySelector('.time');
const tableDate = document.querySelector('.date');
const date = new Date();

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}

function showDate(){
    const currentDate = date.toLocaleDateString('ru-RU');
    tableDate.textContent = currentDate;
}



// greeting
const greeting = document.querySelector('.greeting');
const hours = date.getHours();


function getTimeOfDay(){
    if (hours >= 0 && hours < 7){
        return 'night';
    }
    else if (hours >= 7 && hours < 12){
        return 'morning';
    }
    else if (hours >= 12 && hours < 18){
        return 'day';
    }
    else if(hours >= 18)
    {
        return 'evening';
    }
}
function showGreeting(){
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

const name = document.querySelector('.name');
function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
showTime(showDate(), showGreeting());

// image slider
const body = document.querySelector('body')
// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/19.jpg')";
let minNumber = 1;
let maxNumber = 20
let randomNum = '';
function getRandomNum(minNumber, maxNumber){
 minNumber = Math.ceil(minNumber);
 maxNumber = Math.floor(maxNumber);
 return randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
getRandomNum(minNumber, maxNumber);

function setBg(){
    const img = new Image();
    const timeOfDay = getTimeOfDay();
    const bgNum = randomNum.toString().padStart(2, '0');
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
setBg();

function getSlideNext(){
    if(randomNum >= 20){
        randomNum = 1
        }
    else{
        randomNum++;
    }
    setBg()
    }
const slideNext = document.querySelector(".slide-next");
slideNext.addEventListener("click", getSlideNext);
function getSlidePrev(){
    if(randomNum <= 1){
        randomNum = 20;
        }
    else{
        --randomNum;
    }
    setBg()
    }
const slidePrev = document.querySelector(".slide-prev");
slidePrev.addEventListener("click", getSlidePrev);



// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=40a3703a3cce8e232d51181cc197b35f&units=metric`;;
  const res = await fetch(url);
  const data = await res.json();
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


// quote of the Day
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    maxNumber = data.length;

    quote.textContent = data[randomNum]['text'];
    author.textContent = data[randomNum]['author'];
  }
  getQuotes();

//   audio player
const audio = new Audio();
const playBtn = document.querySelector('.play');
const playBtnNext = document.querySelector('.play-next');
const playBtnPrev = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');
let isPlay = false;
let playNum = 0;

function playAudio() {
audio.src = playList[playNum].src;
    if(!isPlay){
        audio.play();
        playBtn.classList.toggle('pause');
        isPlay = true;
    }
    else{
        audio.pause();
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        isPlay = false;
    }
}
playBtn.addEventListener('click', playAudio);


function playNext(){
    if(playNum >= playList.length){
        playNum = 0;
        }
    else{
        playNum++;
    }
    playAudio();
}
function playPrev(){
    if(playNum = 0){
        playNum = playList.length;
        }
    else{
        --playNum;
    }
    playAudio();
}
playBtnNext.addEventListener('click', playNext);
playBtnPrev.addEventListener('click', playPrev)

playList.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('li');
    li.textContent = element['title'];
    playListContainer.append(li);
});

// settings






