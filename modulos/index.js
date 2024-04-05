const matriz = require('./util/matriz');
const calc = require('./util/calculadora')

let B = [
    [5, 6],
    [7, 3],
    [2, 9]
];

matriz.transporMatriz(B);
console.log('PI = '+ calc.PI);
console.log('2 + 3 = ' + calc.somar(2,3));