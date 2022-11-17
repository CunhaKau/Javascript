/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;;
2 - Preço da gasolina;;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

let precoEtanol = 3.89;
let precoGasolina = 4.79;
const gastoKm = 10;
let distanciaKm = 20; 
const calculoDistanciaLitro = distanciaKm / gastoKm;
const tipoCombustivel = precoEtanol;

if (tipoCombustivel === precoEtanol) {
    const gastoViagemEtanol = (calculoDistanciaLitro * precoEtanol); 
    console.log(gastoViagemEtanol);
    console.log("Tem Etanol");
} else { 
const gastoViagemGasolina = (calculoDistanciaLitro * precoGasolina);
console.log(gastoViagemGasolina);
console.log("Tem Gasolina");
}
