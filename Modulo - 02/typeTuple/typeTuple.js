"use strict";
let pessoa = ['Fagner Gomes', 'Analista programador', 28];
console.log(pessoa);
console.log(pessoa[1]);
let listaFrutas = [1, true, 'mamao', 'maça', 'manga', 'laranja'];
console.log(listaFrutas);
let pessoa2 = ['Fagner Gomes', 'Analista programador', 28];
console.log(pessoa2);
console.log(pessoa2[1]);
function listarPessoas(nomes, idade) {
    return [...nomes, ...idade];
}
let resultado = listarPessoas(['Fagner', 'Ana'], [28, 54]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Fagner', 'Gomes'));
console.log(criarPessoa('Fagner', 'Soares', 'Gomes'));
