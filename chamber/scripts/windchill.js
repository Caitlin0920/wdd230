let temperature = document.getElementById("temperature");
let speed = document.getElementById("speed");
let t = parseFloat(temperature.innerText);
let s = parseFloat(speed.innerText);
let chill = document.getElementById("chill");

function calculateWindChill(temperature, speed) {
    let tInF = (temperature * 1.8) + 32;
    let sInMph = speed * 0.621371192;
    let windChillInF = 35.74 + (0.6215 * tInF) - (35.75 * sInMph ** 0.16) + (0.4275 * tInF * sInMph ** 0.16);
    let windChillInC = (windChillInF - 32) / 1.8;
    return windChillInC.toFixed(2);
};

if (t < 10 && s > 4.8) {
    chill.textContent = String("feels like " + calculateWindChill(t, s) + "°C");
}else {
    chill.textContent = "N/A";
}