/* 1 - Cria uma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível 
nos dê o valor gasto em reais para realizar este percurso.
*/

class Carros {
marca;
cor;
consumo;

constructor(marca, cor, consumo){
    this.marca = marca;
    this.cor = cor;
    this.consumo = consumo; 
    }

descrever (){
    console.log(`o carro é um ${this.carro}, na cor ${this.cor} e consome ${this.consumo} litros por km rodado`);
}

valorGasto (qntKm, preco) {
    return ((qntKm / this.consumo) * preco); 
    }
}

  
const carro1 = new Carros ('Corsa', 'Prata', 8);
console.log(carro1);
console.log('O valor gasto na viagem é de R$ ' + carro1.valorGasto(150, 5));
const carro2 = new Carros ('Vectra', 'Branco', 6);
console.log(carro2);
console.log('O valor gasto na viagem é de R$ ' + carro2.valorGasto(150,5));

