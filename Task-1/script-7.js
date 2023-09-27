//Task1.7

let ope = prompt('operation');
let num1 = prompt('number 1'),
    num2 = prompt('number 1');
let add = '+',
    subtract = '-',
    multiply='*',
    divide='/',
    modulus='%';

if (ope == add) {
    console.log(num1 + num2);
}
else if (ope == subtract) {
    console.log(num1 - num2);
}
else if (ope == multiply) {
    console.log(num1 * num2);
}
else if (ope == divide) {
    console.log(num1 / num2);
}
else if (ope == modulus) {
    console.log(num1 % num2);
}
else{
    console.log('Invalid operation');
}
