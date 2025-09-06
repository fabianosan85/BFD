let celsius = 1; // em °C
let fahrenheit = 32; // em °F
let converter = (celsius * 9/5) + 32
console.log("celsius:" + celsius + "°C");
console.log("converter:" + converter + "°F");
console.log("Sua temperatura convertida é:" +converter.toFixed(2));

function convertertemperatura(){
let celsius = parseFloat(document.getElementById("celsius").value);
let converter = (celsius * 9/5) + 32
console.log("celsius:" + celsius + "°C");
console.log("Sua temperatura convertida é:" +converter.toFixed(2));
document.getElementById("conversao").value = "O valor é : " + converter.toFixed(2);
}
let button = document.getElementById("converter");
button.addEventListener("click", convertertemperatura);