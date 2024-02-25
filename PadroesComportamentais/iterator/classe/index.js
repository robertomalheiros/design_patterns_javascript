class IteradorConcreto {
    constructor(dados) {
        this._dados = dados;
        this._indice = 0;
    }

    next() {
        return this._indice < this._dados.length ?
            {value: this._dados[this._indice++], done: false} :
            {done: true};
    }
}

const dados = [1, 2, 3, 4, 5];
const iterador = new IteradorConcreto(dados);

let item = iterador.next();
while (!item.done) {
    console.log(item.value);  // Deve imprimir: 1, 2, 3, 4, 5
    item = iterador.next();
}
