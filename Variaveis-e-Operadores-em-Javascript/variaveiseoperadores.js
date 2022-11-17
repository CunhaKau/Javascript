
//Faça um programa para calcular o valor gasto de uma viagem.

/* Você terá três variáveis. Sendo elas:
 1 Preço do combustível;
 2 Valor médio de gasto de combustível do carro por km; 
 3 Distância em Km da viagem;

 Imprima no console o valor que será gasto de combustível para finalizar essa viagem.
 */

let precoCombustivel = 4.69;
const kmLitros = 8;
let distanciaKm = 20;

const litrosConsumidos = distanciaKm / kmLitros;
let gastoViagem = litrosConsumidos * precoCombustivel;

console.log(gastoViagem.toFixed(2)); //toFixed converte o valor para texto arredondando o mesmo