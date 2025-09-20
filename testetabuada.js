let botao = document.getElementById("btn-calcular");
botao.addEventListener("click", calcularTabuada);

function calcularTabuada(){
    let input = document.getElementById("numero").value;
    let divResultado = document.getElementById("resultado");
    let numero = parseInt(input);

    // Limpa o conteúdo anterior
    divResultado.innerText = "";

        // Calcula e exibe a tabuada
    for(let i = 1; i <= 10; i++){
        let linhaResultado = numero + " x " + i + " = " + (numero * i) + "\n";
        divResultado.innerText += linhaResultado;
    }
}