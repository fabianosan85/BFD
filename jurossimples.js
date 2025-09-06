let capital=1000; // em R$
let taxa=5; // em %
let tempo =12 // em meses
let montante = capital * (1 + taxa * tempoMeses);
console.log("capital:" + "R$" + capital + " ");
console.log("taxa:" + taxa * 100 + "%");
console.log("tempo:" + tempo + "meses");
console.log("O montante é?:" + montante.toFixed(2));

function calcularjuros(){
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempoMeses").value);
    let montante = capital * (1 + taxa * tempoMeses);
    document.getElementById("resultado").value = "R$" + montante.toFixed(2);
}
let button = document.getElementById("calcular");
button.addEventListener("click", calcularjuros);