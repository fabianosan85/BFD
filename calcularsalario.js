let nome = document.getElementById("Nome");
let salariobruto = document.getElementById("salario");
let dependentes = document.getElementById("dependentes");
let calcular = document.getElementById("calcular");

function calcularsalario() {
    let nome = parseFloat(document.getElementById("nome").value);
    let salariobruto = parseFloat(document.getElementById("salariobruto").value);
    let dependentes = parseFloat(document.getElementById("dependentes").value);
    let calcular = salariobruto - inss + (15.000 * dependentes) +40 + 100;
    document.getElementById("calcular").value = "R$" + calcular.toFixed(2);
}

let button = document.getElementById("calcular");
button.addEventListener("click", calcular);
//Formula= Sal = SB-INSS + (15,000 * D) + 40 +100


    if(salariobruto <=300){
        inss=salariobruto*0.08;
    }else if(salariobruto > 300 && salariobruto <=700){
        inss=salariobruto*0.09;
    }else{
        inss=salariobruto*0.1
    }
    salarioliquido = salariobruto - inss + (15*dependentes) +40+100;
    alert("O salário Liquido do Funcionario é" + nome.value + "é de R$" + salarioliquido.toFixed(2));
}
