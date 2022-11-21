/* Elabore um algoritmo que calcule o que deve ser pago por um produto, 
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a 
condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3  Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de equiqueta mais juros de 10%.

*/


function aplicarDesconto(preco, desconto){
return (preco - (preco * (desconto/100)));

}
function aplicarJuros(preco, juros){
    return (preco + (preco * (juros/100)));
    
    }


let preco = 50;
const formaPagamento = 4;

if (formaPagamento === 1){
console.log(aplicarDesconto(preco, 10))
} 
else if (formaPagamento === 2){
    console.log(aplicarDesconto(preco, 15));
}
else if (formaPagamento === 3){
    console.log('2x de ' + (preco/2));
}
else {
    console.log('3 x de '+ ((aplicarJuros(preco, 10))/3).toFixed(2));
}
