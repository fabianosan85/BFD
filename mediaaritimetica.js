let valor1 = 1;
let valor2 = 1;
let valor3 = 1;
let valor4 = 1;
let media = (valor1 + valor2 + valor3 + valor4) / 4;
console.log("O primeiro valor é:" + valor1);
console.log("O segundo valor é:" + valor2);
console.log("O terceiro valor é:" + valor3);
console.log("O quarto valor é:" + valor4);
console.log("A media aritimetica é?:" + media.toFixed(2));

function calcularmedia(){
let valor1 = parseFloat(document.getElementById("valor1").value);
let valor2 = parseFloat(document.getElementById("valor2").value);
let valor3 = parseFloat(document.getElementById("valor3").value);
let valor4 = parseFloat(document.getElementById("valor4").value);
let media = (valor1 + valor2 + valor3 + valor4) / 4;
console.log("O primeiro valor é:" + valor1);
console.log("O segundo valor é:" + valor2);
console.log("O terceiro valor é:" + valor3);
console.log("O quarto valor é:" + valor4);
console.log("A media aritimetica é?:" + media.toFixed(2));
document.getElementById("media").value = "A media aritimetica é: " + media.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calcularmedia);