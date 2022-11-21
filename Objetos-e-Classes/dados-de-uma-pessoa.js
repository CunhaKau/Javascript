    const pessoa = {
        nome: 'Kau',
        idade: 25,

        descrever: function () {
            console.log('Meu nome é ' + this.nome + ' minha idade é ' + this.idade);
        }
    }

    pessoa.descrever();
