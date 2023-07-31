let nome: string = 'Fagner Gomes';
console.log(nome);

let animais: string[] = ['Elefante', 'Baleia', 'Macaco', 'Golfinho'];
console.log(animais);

let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Ferrari', ano: 2020, preco: 1000000};
console.log(carro);

function multiplicarNumeros(num1: number, num2: number){
    return num1 * num2;
}

console.log(multiplicarNumeros(2, 5));