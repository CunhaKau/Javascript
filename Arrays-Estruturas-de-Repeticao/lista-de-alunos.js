const alunos = ['Kau', 'Jose', 'Joao'];
alunos.push('Raul');
alunos[4] = 'Vitor';
console.log(alunos.pop()); //traz a última posição
console.log(alunos.shift()); //traz a primeira posição
console.log(alunos.length); //mostra o tamanho da lista
console.log(alunos);

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas [0] + notas [1] + notas [2] + notas [3] + notas [4];
console.log('soma da lista de notas = ' + soma/5);
