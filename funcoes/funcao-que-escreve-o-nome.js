function escrevaNome(nome){
   return 'Meu nome é ' + nome;
}


escrevaNome('Kau Cunha');


function verificar(idade) {
    if (idade >= 18){
       console.log (escrevaNome('Kau Cunha') + ' e sou maior de idade');
    } else {
        console.log (escrevaNome('Kau Cunha') + ' e sou menor de idade');
    }
}

verificar(25);
  