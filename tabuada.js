let botao = document.getElementById("btn-calcular");
botao.addEventListener("click", calcularTabuada);

function calcularTabuada(){
    let input = document.getElementById("numero").value;
    let divResultado = document.getElementById("resultado");
    let numero = parseInt(input);
    //Calculo da tabuada
    divResultado.innerText = "";   
        
    for(let i=1;i<=10;i++){
        let linhaResultado = numero+" x "+i+" = "+(numero*1)+"\n \n";
        divResultado.innerText += linhaResultado;
    }
}
