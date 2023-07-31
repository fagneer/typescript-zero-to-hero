let pessoa: [string, string, number] = ['Fagner Gomes', 'Analista programador', 28];
console.log(pessoa);
console.log(pessoa[1]);

let listaFrutas: [number, boolean, ...string[]] = [1, true, 'mamao', 'maça', 'manga', 'laranja'];
console.log(listaFrutas);

let pessoa2: [nome: string, cargo: string, idade: number] = ['Fagner Gomes', 'Analista programador', 28];
console.log(pessoa2);
console.log(pessoa2[1]);

function listarPessoas(nomes: string[], idade: number[]){
    return [...nomes, ...idade]
}

let resultado = listarPessoas(['Fagner', 'Ana'], [28, 54]);
console.log(resultado);

type Nome =
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('Fagner', 'Gomes'));
console.log(criarPessoa('Fagner', 'Soares', 'Gomes'));