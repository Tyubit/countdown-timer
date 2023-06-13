// make it todays date and time + days +hours +munutes etc = some date in the future
let date = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);

const days = document.querySelector('#days').querySelector('.time');
const hours = document.querySelector('#hours').querySelector('.time');
const minutes = document.querySelector('#minutes').querySelector('.time');
const seconds = document.querySelector('#seconds').querySelector('.time');

let countdown =() => {
    let newDate = new Date();

    //future date - today = distant
    let distant = date - newDate;

    let days = Math.floor(distant / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distant % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distant % (1000 * 60)) / 1000);

    return {
        distant,
        days,
        hours,
        minutes,
        seconds
    };
}

const countdownAction = setInterval(() => {
    const t = countdown();

    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = t.seconds;
} ,1000);