"use strict";
let frutas = ['abacaxi', 'laranja', 'pera', 'manga', 'maça'];
console.log(frutas[0]);
let frutas2 = ['abacaxi', 'laranja', 'pera', 'manga', 'maça'];
console.log(frutas2[3]);
let idiomas = ['protugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas);
console.log(idiomas.length);
idiomas.push('Mandarin');
console.log(idiomas);
console.log(idiomas.length);
idiomas.push('Italiano');
console.log(idiomas);
console.log(idiomas.length);
let listaNumeros = [0, 1, 2, 3, 4, 5, 6];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
let linguagensArray = new Array('JavaScript', 'Pyton', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        const element = linguagens[i];
        console.log(element);
    }
}
funcaoLinguagens(linguagensArray);
