let numero = 7;
let contDivisores = 0;
let divisor = 2;
while(numero!=1){
    if(numero%divisor!=0){
    divisor++;
    console.log("Divisor testado: " + divisor);
    }else{
        console.log("Divisor encontrato: " + divisor);
        numero=numero/divisor;
        contDivisores++;
    }
}