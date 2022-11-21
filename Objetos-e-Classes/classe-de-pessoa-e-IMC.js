/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura;
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer 
do seu IMC;
*/



class Pessoas{
    nome;
    peso;
    altura;


    constructor (nome, peso, altura){
     this.nome = nome;
     this.peso = peso;
     this.altura = altura;
 }

imc(){
   return this.peso/Math.pow(this.altura, 2);
 }
}
const jose = new Pessoas ('Jose', 60, 1.75);
console.log(jose);
console.log(jose.imc());
const vitoria = new Pessoas ('Vitoria', 75, 1.55);
console.log(vitoria);
console.log(vitoria.imc());

