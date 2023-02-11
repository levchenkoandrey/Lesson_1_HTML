// // 1. Створити пустий масив та :
// let arr = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0, j = 0; i < 100; i+=2, j++) {
//         arr[j] = i;
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1, j = 0; i < 100; i+=2, j++) {
//         arr[j] = i;
// }
// console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < 50; i+=3) {
//     console.log(i);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 3; i < 50; i+=3) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// for (let i = 3, j = 0; i < 50; i+=3) {
//     if (i % 2 === 0) {
//         console.log(i);
//         arr[j] = i;
//         j++
//     }
// }
// console.log(arr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arrA = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arrA.length; i++) {
//     const arrAElement = arrA[i];
//     if (arrA[i + 1] % 2 === 0){
//         console.log(arrAElement);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let check = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let i = 0; i < check.length; i++) {
//     sum += check[i];
// }
// let result = sum/check.length;
// console.log(Math.round(result));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrNew = [];
// let j = 0;
// for (let i = 0; i < arr.length; i++, j++) {
//     const arrElement = arr[i];
//     arrNew[j] = arrElement * 5;
// }
// console.log(arrNew);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let newArr = [];
// let arrOne = ['one', 2, 'three', false, 'four', 5, true, 7, null, 8, undefined, 0];
// let j = 0;
// for (let i = 0; i < arrOne.length; i++) {
//     const arrOneElement = arrOne[i];
//     if(typeof(arrOneElement) === 'number'){
//         newArr[j] = arrOneElement;
//         j++
//     }
// }
// console.log(newArr);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
//     let usersWithId = [
//             {id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true},
//             {id: 4, name: 'olya', age: 28, status: false}
//         ];
//     let citiesWithId = [
//             {user_id: 3, country: 'USA', city: 'Portland'},
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'},
//             {user_id: 4, country: 'USA', city: 'Miami'}
//         ];
//     let usersWithCities = [];
//     let j = 0;
//     for (let i = 0; i < usersWithId.length; i++) {
//             const item = usersWithId[i];
//             for (let citiesWithIdKey in citiesWithId) {
//                 if (citiesWithId[citiesWithIdKey]['user_id'] === item['id']){
//                     item['address'] = citiesWithId[citiesWithIdKey];
//                     usersWithCities[j] = item;
//                     j++;
//                 }
//             }
//         }
//     console.log(usersWithCities);
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (const number of arr) {
//     if (number % 2 === 0){
//         console.log(number);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];
// for (let i = 0, j = 0; i < arr.length; i++, j++) {
//     const newArrElement = arr[i];
//     newArr[j] = newArrElement;
// }
// console.log(newArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     const Element = arr[i];
//     word = word + Element;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// let i = 0;
// while (i < arr.length){
//     word = word + arr[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (const Element of arr) {
//     word = word + Element;
// }
// console.log(word);

