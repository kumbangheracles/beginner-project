const months = [
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 
    'November', 'December'
];
const weekDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
];

const timeSet = document.querySelector('.timeSet');
const content = document.querySelector('.content-wrapper');
const items = document.querySelectorAll('.deadline h1');

let tempDate = new Date();
let futureDate = new Date(tempDate);  // Salin `tempDate`
futureDate.setDate(tempDate.getDate());  // Tambahkan 11 hari ke `tempDate`
futureDate.setHours(11, 37, 0, 0);  // Set waktu ke 11:37:00

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekDay = weekDays[futureDate.getDay()];

timeSet.textContent = `Time ends on ${weekDay} ${date} ${month} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        return item < 10 ? `0${item}` : item;
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        content.innerHTML = `<h4 class="expired">Sorry, Time's ended!</h4>`;
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
