/* Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a 
condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de equiqueta mais juros de 10%.

*/

let preco = 50;
const debito = (preco/100)*10;
const dinheiroPix = (preco/100)*15;
const parcelado = preco;
const parcelado3 = (preco/100)*10;
const pagamento = parcelado3;


if (pagamento === debito){
    const valorFinalDebito = preco - debito;
    console.log(valorFinalDebito);
}

if (pagamento === dinheiroPix){
    const valorFinalPix = preco - dinheiroPix;
    console.log(valorFinalPix);
}

if (pagamento === parcelado){
    const valorFinalParcelado = preco/2;
    console.log('2x de ' +  valorFinalParcelado)
  
}

if (pagamento === parcelado3){
    const valorFinalParcelado3 = (preco + parcelado3) / 3;
    console.log('3x de ' + valorFinalParcelado3.toFixed());
}
