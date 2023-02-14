// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area = (a, b) => a * b;
// console.log(area(10,5));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let area = (r) => Math.PI * Math.pow(r,2);
// console.log(+area(4).toFixed(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let area = (r,h) => 2 * Math.PI * r * (h + r);
// console.log(+area(4,7).toFixed(2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let printer = (arr) => {for (const item of arr) {console.log(item)}}
// printer([
//     {name: 'vasya', age: 31, status: false},
//     5,
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     7,
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     true,
//     {name: 'masha', age: 30, status: true},
//     'hello',
//     {name: 'max', age: 31, status: true}
// ]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let writer = (str) => document.write(`<p>${str}</p>`);
// writer('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let writer = (str) => {
//     document.write('<ul>');
//         document.write(`<li>${str}</li>`);
//         document.write(`<li>${str}</li>`);
//         document.write(`<li>${str}</li>`);
//     document.write('</ul>');
// }
// writer('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let writer = (str, quantity) => {
//     document.write('<ul>');
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${str}</li>`)
//     }
//     document.write('</ul>')
// }
// writer('hello world', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (arr) => {
//     document.write('<ul>');
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`)
//         }
//     document.write('</ul>')
// }
// list([1, 'two', true, 'three', 4, false, 6]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
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
// let printer = (arr) => {
//     for (const item of arr) {
//         document.write(`<div>${item.id} -- ${item.name} -- ${item.age}</div>`);
//     }
// };
// printer(users)

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 4, 2, 6, 0.5, 9, 37, 29, 74, 99,];
// let minValue = (arr) => {
//     let min = arr[0];
//     for (const element of arr) {
//         if (min > element) {
//             min = element;
//         }
//     }
//     console.log(min);
// };
// minValue(arr);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let sum = (arr) => {
//     let result = 0;
//     for (const element of arr) {
//         result += element;
//     }
//     console.log(result);
// };
// sum([1,2,3,4,5,6,7,8,9,10]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let x = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = x;
//     console.log(arr);
// };
// swap([11, 22, 33, 44], 0, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sum, currencies, newCurrency) => {
//     let result;
//     for (const item of currencies) {
//         if(newCurrency === item.currency){
//             result = sum / item.value;
//         }
//     }
//     console.log(+result.toFixed(2));
// };
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');