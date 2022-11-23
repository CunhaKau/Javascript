// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado


const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i < numeros.length; i++){
const par = numeros[i];
if (par % 2 === 0){
    console.log(par);
}}
