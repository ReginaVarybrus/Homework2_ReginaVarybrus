'use strict';

const someNum = 805;

console.log(`Hexidemical 805 = ${someNum.toString(16)}`);
console.log(`Binary 805 = ${someNum.toString(2)}`);

console.log('==========================');

let num = prompt('Введите целое число', '');

console.log(+num + 2);
console.log(num - 2);
console.log(num * 2);
console.log(num / 2);
console.log(num.length);

console.log('==========================');

let numFractional = 0.51000002;

console.log(+numFractional.toFixed(2) + 2);

console.log('=======СТРОКИ=============');

const str = 'the quick brown fox jumps over the lazy dogs back';
const strTwo = 'brown fox jumps';

console.log(str.indexOf(strTwo, 0));
console.log(strTwo.toUpperCase());

console.log('====ЛОГИЧЕСКИЕ ОПЕРАЦИИ===');

let a = 1;
let b = 2;
let c = 3;
let d = 3;

console.log((a < c > b) || (b < c <= c) || (c >= c >= d)); 
console.log((a < c) <= b && b >= (c == c) && (c == c) <= d);

console.log('====ТВОРЧЕСКОЕ ЗАДАНИЕ===');

let someString = '0';
let someNumber = 0;
let someWord = 'hello';

console.log(someString == someNumber, someString === someNumber);
console.log(someNumber ?? someWord, someWord ?? someNumber);
