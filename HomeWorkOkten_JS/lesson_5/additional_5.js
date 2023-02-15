// Всі функції повинні бути описані стрілочним типом!!!!
// let arr = [1, 4, 8, 37, 2, 6, 0.1, 3, 9, 12];

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minValue = (x,y,z) => {
//     let minArray = [x,y,z];
//     let min = minArray[0];
//     for (let i = 0; i < minArray.length; i++) {
//         if (minArray[i] < min){
//             min = minArray[i];
//         }
//     }
//     console.log(min);
// }
// minValue(27,1,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (x, y, z) => {
//     let newArray = [x,y,z];
//     let max = newArray[0];
//     for (const item of newArray) {
//         if(item > max){
//             max = item;
//         }
//     }
//     console.log(max);
// }
// maxNumber(311,92,17);

// - створити функцію яка повертає найбільше число з масиву
// let maxNumber = arr => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const number = arr[i];
//         if(max < number){
//             max = number;
//         }
//     }
//     console.log(max);
// }
// maxNumber(arr);

// - створити функцію яка повертає найменьше число з масиву
// let maxNumber = arr => {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const number = arr[i];
//         if(min > number){
//             min = number;
//         }
//     }
//     console.log(min);
// }
// maxNumber(arr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let sumNumbers = arr => {
//     let sum = arr[0];
//     for (const item of arr) {
//         sum += item;
//     }
//     console.log(sum);
// };
// sumNumbers(arr);

// - Дано натуральное число n. Выведите все числа от 1 до n.
// let print = n => {
//     for (let i = 1; i < n; i++) {
//         console.log(i);
//     }
// }
// print(9);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.
// let print = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (b < a) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
// print(35, 27);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let exchange = (arr, i) => {
//     let item = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = item;
//         console.log(arr);
// }
// exchange([9,8,0,4], 0);
// exchange([9,8,0,4], 1);
// exchange([9,8,0,4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.

// let asd = (arr) => {
//     const newArr = [];
//     let j = 0;
//     for (const item of arr) {
//         if (item !== 0){
//             newArr[j] = item;
//             j++
//         }
//     }
//     for (const item of arr) {
//         if (item === 0) {
//             newArr[j] = item;
//             j++
//         }
//     }
//     console.log(newArr);
// }
// asd([1,0,6,0,3]);
// asd([0,1,2,3,4]);
// asd([0,0,1,0]);
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]