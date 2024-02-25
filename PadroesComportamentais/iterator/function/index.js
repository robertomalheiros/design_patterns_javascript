function criarIterador(dados) {
    let indice = 0;

    return {
        next: function() {
            return indice < dados.length ?
                {value: dados[indice++], done: false} :
                {done: true};
        }
    };
}

const dados = [1, 2, 3, 4, 5];
const iterador = criarIterador(dados);

let item = iterador.next();
while (!item.done) {
    console.log(item.value);  // Deve imprimir: 1, 2, 3, 4, 5
    item = iterador.next();
}