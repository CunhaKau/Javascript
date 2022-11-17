 /* O IMC (Indice de Massa Muscular) 
é um critério da Organização Mundial
de Saúde para dar uma indicação sobr a condição de peso uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um 
adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade Grave.

*/


let peso = 55;
const altura = 1.73;
const imc = peso / Math.pow(altura,2);

if (imc < 18.5){
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25){
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso');
} else if (imc >= 30 && imc < 40){
    console.log('Obeso');
} else{
    console.log('Grave');
}
