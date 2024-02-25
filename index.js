let numero= 0;
let string = "Hola";
let booleano = true;
let array = [1,2,3,4,5];
let objeto = {
    nome: "Juan",
    apelido: "Perez"
}

let lerObjeto = (objeto) => objeto.nome + " " + objeto.apelido;

console.log(`numero: ${numero}
String: ${string}
Boleano: ${booleano}
Array: ${array}
Objeto: ${lerObjeto(objeto)}`)

class Pessoa {
    constructor(nome, apelido) {
        this.nome = nome;
        this.apelido = apelido;
    }
    imprimirNome() {
        return this.nome + " " + this.apelido;
    }
}


console.log(Object.getOwnPropertyNames(Pessoa.__proto__)); // Imprime os métodos de um array