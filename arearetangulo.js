let altura = 1// em cm
let largura = 1// em cm
let area = largura * altura;
console.log("altura:" + "cm" + altura + " ");
console.log("largura:" + "cm" + largura + " ");
console.log("A area do retangulo é?:" + area.toFixed(2));

function calculararea(){
let altura = parseFloat(document.getElementById("altura").value);
let largura = parseFloat(document.getElementById("largura").value);
let area = largura * altura;
console.log("altura:" + "cm" + altura + " ");
console.log("largura:" + "cm" + largura + " ");
console.log("A area do retangulo é?:" + area.toFixed(2));
document.getElementById("area").value = "A area do retangulo é: " + area.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calculararea);