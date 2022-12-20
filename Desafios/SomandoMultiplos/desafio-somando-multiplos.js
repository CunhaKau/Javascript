// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());


const multi = []

for (let i = 0; i <= N; i++){
		if(i % a === 0){
    	multi.push(i);
    }
}

let soma = 0;

for (let i = 0; i < multi.length; i++){
	soma += multi[i];
}

console.log(soma)

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".