const intems = document.querySelectorAll(".countdown-item > h4");

const countdownElement = document.querySelector(".countdown");

// Incepem timpul ramas pana la lansare
let countdownDate = new Date(2023, 06, 09, 21, 52, 0).getTime();

function getCountdouwnTime() {
    //Determinarea timpului real
    const now = new Date().getTime();

    //Cautarea diferentei de timp
    const distance = countdownDate - now;

    //1s = 1000ms
    //1m = 60s
    //1h = 60m
    //1d = 24h

    //creem variabila in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let secundes = Math.floor((distance % oneMinute) / 1000);

    //Creem un masiv cu variabile
    const values = [days, hours, minutes, secundes];
    console.log(values);

    //Adaugam valoare variabililor de pe pagine
    intems.forEach(function (item, index) {
        item.textContent = values[index];
    });

    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'> Timpul a trecut </h4>";
    }
}

// Actualizare in fiecare secunda
let countdown = setInterval(getCountdouwnTime, 1000);

// Initializarea timpului curent
getCountdouwnTime();
