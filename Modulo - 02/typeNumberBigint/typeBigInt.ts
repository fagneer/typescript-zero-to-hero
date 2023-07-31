let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Ponto Flutuante:', num1);
console.log(typeof(num1));
console.log('Exadecimal:', num2);
console.log(typeof(num2));
console.log('Octal:', num3);
console.log(typeof(num3));
console.log('Binario:', num4);
console.log(typeof(num4));

let big1: bigint = 1351500000000000000000000n;
let big2: bigint = 0x13515FADE00056165161888n;
let big3: bigint = 0o13515000000000000000012n;
let big4: bigint = 0b11110000000000000000001n;

console.log(typeof(big1), ' :', big1);
console.log(typeof(big2), ' :', big2);
console.log(typeof(big3), ' :', big3);
console.log(typeof(big4), ' :', big4);