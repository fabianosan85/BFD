let botao = document.getElementById("btn-calcular");
botao.addEventListener("click", calcularTabuada);
function calcularTabuada(){
    let input = document.getElementById("numero").value;
    let divResultado = document.getElementById("resultado");
    let numero = parseInt(input);
    //Calculo da tabuada
    let resultado = "";
    for(let i=1;i<=10;i++){
    resultado = numero+" x "+i+" = "+(numero*1)+"\n";
    console.log(resultado);
    divResultado.innerText += resultado;
    }
}