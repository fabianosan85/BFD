let raio = 1// em cm
let circunferencia = 2 * Math.PI * raio;
console.log("raio:" + "cm" + raio + " ");
console.log("A circunferencia do circulo é?:" + circunferencia.toFixed(2));

function calcularcircunferencia(){
let raio = parseFloat(document.getElementById("raio").value);
let circunferencia = 2 * Math.PI * raio;
console.log("raio:" + raio + "cm");
console.log("A circunferencia do circulo é?:" + circunferencia.toFixed(2));
document.getElementById("circunferencia").value = "A circunferencia é: " + circunferencia.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calcularcircunferencia);