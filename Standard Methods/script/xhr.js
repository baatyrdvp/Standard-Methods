// Математические методы в JavaScript
// Работа со степенью и корнем

// 1
// const num = Math.pow(2, 10);
// console.log(num);

// 2
// console.log(Math.sqrt(245));

// 3
// const arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// let cub = 0;
// let square = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     cub = Math.pow(sum, 3);
//     square = Math.sqrt(cub);
// }

// console.log(sum);
// console.log(cub);
// console.log(square);

// Работа с функциями округления

// 4
// let num = Math.sqrt(379);
// let num1 = num.toFixed(1);
// let num10 = num.toFixed(2);
// let num100 = num.toFixed(3);
// console.log(num);
// console.log(num1);
// console.log(num10);
// console.log(num100);

// 5
// let num = Math.sqrt(587);
// let ceil = Math.ceil(num);
// let floor = Math.floor(num);
// console.log(num);
// console.log(ceil);
// console.log(floor);
// let obj = {
//     'ceil': ceil,
//     'floor': floor
// }

// console.log(obj);

// Нахождение максимального и минимального числа

// 6
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Работа с рандомом

// 7
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNum(1, 100));

// Работа с модулем

// 9
// let a = prompt();
// let b = prompt();
// let result = Math.abs(a) - Math.abs(b);
// console.log(result);

// Строковые методы JavaScript
// Работа с регистром символов

// 1

// let str = 'js';
// console.log(str.toUpperCase())

// 2

// let str = 'JS';
// console.log(str.toLowerCase());

// Работа с substr, substring, slice

// 3

// через substring
// let str = 'я учу javascript!';
// let sub = str.substring(2, 15);
// console.log(sub);

// через substr
// let str = 'я учу javascript!';
// let sub = str.substr(2, 14);
// console.log(sub);

// через slice
// let str = 'я учу javascript!';
// let sub = str.slice(2, 16);
// console.log(sub);

// Работа с indexOf

// 4

// let str = 'abcde';
// let index = str.indexOf('c');
// console.log(index);

// 5
// let str = 'abcde';
// console.log(str.includes('a'));

// 6
// let str = 'abcde';

// if (str[0] == 'a') {
//     console.log(true)
// } else {
//     console.log(false);
// }

// 7
// let str = 'abcde';

// if (str[4] == 'a') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 8
// let str = 'abcde';

// if (str[0] ==  'http://') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 9
// let str = 'abcde';

// if (str[4] == '.html') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// Работа с startsWith, endsWith

// 10
// let str = 'abcde';
// console.log(str.startsWith('http://'));

// 11
// let str = 'abcde';
// console.log(str.endsWith('.html'));

// 12
// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);

// 13
// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// 14
// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str)