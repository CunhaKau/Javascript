/* 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno 
em um semestre da faculdade calcule e imprima a sua média e a 
sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, repravação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const nota1 = 6;
const nota2 = 7;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média foi:')
console.log(media.toFixed());

if (media < 5){
    console.log('reprovação');
} else if (media > 5 && <= 7) {
    console.log('recuperação');
} else {
    console.log('passou no semestre');
}
