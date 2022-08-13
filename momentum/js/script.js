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
    console.log(currentDate);
}

showTime(showDate());
