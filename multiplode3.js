// De 0 a 12 - Dado um intervalo, contar quantos numeros são multiplos de 3

let min = 1,  max = 15;
let i = min, contMultiplos3 = 0;
while (i<=max){
    if(i%3==0){
        console.log(i + " é multimplo de 3");
        contMultiplos3++;
    }
    i++;
}
console.log("Existem " + contMultiplos3 + " números multiplos de 3 entre" + min + "e" + max) 
