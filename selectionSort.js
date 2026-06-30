const livros = require('./listaLivros');
const melhorValor = require('./menorValor');

for(let atual = 0; atual < livros.lenght; atual ++){
    let menor = menorValor [livros,atual];

     let livroAtual = livros [atual];
     let livroMenorPreco = livros [menor];

     livros{atual} = livroMenorPreco
     livros{menor} = livroAtual

}
console.log(livros)