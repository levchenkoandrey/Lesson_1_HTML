// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b){
//     return a * b;
// }
// let result = area(2,6);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r) {
//     return Math.PI * Math.pow(r,2);
// }
// let result = area(2);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(h,r) {
//     return 2 * Math.PI * r * (h + r);
// }
// let result = area(2,2);
// console.log(result);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function writer(arr) {
//     for (const item of arr) {
//         console.log(item)
//     }
// }
// writer([
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function writer(str){
//     document.write(`<p>${str}</p>`)
// }
// writer('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function writer(str) {
//     document.write('<ul>');
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${str}</li>`)
//     }
//     document.write('</ul>')
// }
// writer('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function writer(str, item) {
//     document.write('<ul>');
//     for (let i = 1; i <= item; i++) {
//         document.write(`<li>${str}</li>`)
//     }
//     document.write('</ul>')
// }
// writer('hello world', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(arr) {
//         document.write('<ul>');
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write('</ul>')
// }
// list([1, 'two', true, 'three', 4, false, 5]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
// function print(arr) {
//     for (const user of arr) {
//         document.write(`<div> userID : ${user.id} userName : ${user.name} userAge : ${user.age}</div>`);
//     }
// }
// print(users);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 4, 2, 6, 9, 37, 29, 74, 99, 0.5];
// function rest(arr) {
//     let a = arr[0];
//     for (const arrElement of arr) {
//         if (a > arrElement){
//             a = arrElement;
//         }
//     }
//     return  a;
// }
// let result = rest(arr);
// console.log(result);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arr = [1, 4, 2, 6, 9, 37, 29, 74, 99, 0.5];
// function sum(arr) {
//     let b = 0;
//     for (const arrElement of arr) {
//         b = b + arrElement;
//
//     }
//    return b
// }
// let result = sum(arr);
// console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заначення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, x, y) {
//     let asd = arr[x];
//     arr[x] = arr[y];
//     arr[y] = asd;
//     return arr;
// }
// let result = swap([11,22,33,44,55,66,77,88],0,4);
// console.log(result);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(amount, arr, newCurrency) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         if (arrElement['currency'] === newCurrency){
//            sum =  amount / arrElement['value'];
//         }
//     }
//     return sum;
// }
// let result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
// console.log(result.toFixed(2));
