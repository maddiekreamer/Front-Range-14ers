let myForm = document.querySelector("#myForm");
let form = document.querySelector('form');
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let image = document.querySelectorAll("img")
let currentLocation = {
    weather: "",
    temp: ""
}

let key = '8dd64492944a2089772acfcdb5c63ffc';

let coordinates = [{
    name: 'grays',
    lat: '39.6336',
    long: '105.8172'
}, {
    name: 'torreys',
    lat: '39.6428',
    long: '105.8214'
}, {
    name: 'evans',
    lat: '39.5883',
    long: '105.6438'
}, {
    name: 'longs',
    lat: '40.2549',
    long: '105.6160'
}, {
    name: 'pikes',
    lat: '38.8409',
    long: '105.0423'
}, {
    name: 'bierstadt',
    lat: '39.5828',
    long: '105.6686'
}]

const getWeather = (focus) => {
    let id = focus.target.id
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[id]['lat']}&lon=${coordinates[id]['long']}&APPID=${key}`)
        .then(res => pulledWeather(res.data, id));
}

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("click", getWeather, false)
}

const pulledWeather = (data, id) => {
    let textInfo = document.querySelectorAll(".image-h2")[id];
    currentLocation.temp = temperatureConverter(data.list[0].main.temp) + '° F';
    currentLocation.weather = data.list[0].weather[0].main;
    textInfo.innerHTML = currentLocation.temp + ', ' + currentLocation.weather
    textInfo.classList.add("darken")
}

myForm.addEventListener("submit", function (event) {
    event.preventDefault()
    if (email.value && password.value && checkbox.checked || email.value && password.value) {
        window.alert("Success!");
    } else {
        window.alert("Error!");
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let userEmail = document.getElementById('email').value;
    localStorage.setItem("email", userEmail);
})

const logThis = (data) => {
    console.log(data);
    return data;
}

const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    return (Math.round(((valNum - 273.15) * 1.8) + 32));
}