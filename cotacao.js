let reais = 5.42; // em R$
let cotacaoDolar = 1; // em R$
let calcular = reais / cotacaoDolar;
console.log("reais:" + "R$" + reais + " ");
console.log("conversao:" + "$" + conversao + " ");
console.log("Sua moeda convertida é:" +calcular.toFixed(2));

function calcularMoeda(){
let reais = parseFloat(document.getElementById("reais").value);
let calcular = reais / 5.42;
console.log("reais:" + "R$" + reais + " ");
console.log("Sua moeda convertida é:" +calcular.toFixed(2));
document.getElementById("conversao").value = "O valor Convertido é : " + calcular.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calcularMoeda);