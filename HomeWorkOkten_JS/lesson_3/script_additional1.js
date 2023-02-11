// --створити масив з:
//     - з 5 числових значень
// let arrN = [1,2,3,4,5];

// - з 5 стічкових значень
// let arrS = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']

// - з 5 значень стрічкового, числового та булевого типу
// let arrV = [5,'ipsum', 'dolor',true,false];

// - та вивести його в консоль
// console.log(arrN,arrS,arrV);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrR = [];
// arrR[0] = 6;
// arrR[1] = 'string';
// arrR[2] = true;
// arrR[3] = 29;
// arrR[4] = false;
// arrR[5] = {name: 'vasya', age: 27, weight: 82};
// console.log(arrR);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
// let i = 0;
// while (i < arr.length){
//     let item = arr[i];
//     console.log(item);
//     i++;
// }

//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < arr.length){
//     let item = arr[i];
//     console.log(item);
//     i+=2;
//}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//  for (let i = 1; i < arr.length; i+=2) {
//      const arrElement = arr[i];
//      console.log(arrElement);
//  }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length){
//     let item = arr[i];
//     if( item % 2 === 0){
//         console.log(item);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//      const arrElement = arr[i];
//     if( arrElement % 2 === 0){
//         console.log(arrElement);
//      }
//   }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (const number of arr) {
//     let item = number;
//     if(item % 3 === 0 ){
//         item = 'okten';
//         console.log(item);
//     }
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = arr.length-1;
// while (i >= 0){
//     let item = arr[i];
//     console.log(item);
//     i--;
// }

// for (let i = arr.length-1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// let i = arr.length-1;
// while (i >= 1){
//     let item = arr[i];
//     if(i % 2 !== 0){
//         console.log(item);
//     }else if(i % 2 === 0){
//         console.log(arr[i-1]);
//     }
//     i-=2
// }

// for (let i = arr.length-1; i >= 1; i-=2) {
//     let arrElement = arr[i];
//     if(i % 2 !== 0){
//         console.log(arrElement);
//     }else if(i % 2 === 0){
//         console.log(arr[i-1]);
//     }
// }

// let i = arr.length-1;
// while (i >= 0){
//     let item = arr[i];
//     if(i % 2 !== 0){
//         console.log(arr[i-1]);
//     }else if(i % 2 === 0){
//         console.log(item);
//     }
//     i-=2
// }

// for (let i = arr.length-1; i >= 0; i-=2) {
//     let arrElement = arr[i];
//     if(i % 2 !== 0){
//         console.log(arr[i-1]);
//     }else if(i % 2 === 0){
//         console.log(arrElement);
//     }
// }

// for (let i = arr.length-1; i >= 0; i--) {
//     let arrElement = arr[i];
//     if(arrElement % 3 === 0 ){
//         arrElement = 'okten';
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (const number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'Nobis', 'nostrum'];
// for (const string of arr) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 1, 2, 3, 4, 5];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['Lorem', false, 'dolor', true, false, 1, true, 3, 4,false];
// for (const arrElement of arr) {
//     if(typeof(arrElement) === 'boolean' ){
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['Lorem', false, 'dolor', true, false, 1, true, 3, 4,false];
// for (const arrElement of arr) {
//     if(typeof(arrElement) === 'number' ){
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['Lorem', false, 'dolor', true, false, 1, true, 3, 4,false];
// for (const arrElement of arr) {
//     if(typeof(arrElement) === 'string' ){
//         console.log(arrElement)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0]= 'hello';
// arr[1]= 'lorem';
// arr[2]= false;
// arr[3]= 1;
// arr[4]= 'box';
// arr[5]= true;
// arr[6]= 98;
// arr[7]= false;
// arr[8]= 'true';
// arr[9]= -834;
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 202; i+=2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//         document.write(`<h2>${i}</h2>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0){
//         console.log(i);
//         document.write(`<h2>${i}</h2>`);
//     }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     {
//         title: 'Jain Tarka Bhasha',
//         numberOfPages: 276,
//         authors: ['Tara Singh', 'Agrawala', 'Krishna Deva', 'Banners Adris', 'Narendra Nath'],
//         genres: ['Comedy', 'Adventure', 'Historical', 'Romance', ]
//     },
//     {
//         title: 'Sambodhi',
//         numberOfPages: 954,
//         authors: ['Amar Gopilal', 'Mulk Raj'],
//         genres: ['Crime and mystery', 'Fantasy', 'Cyberpunk and derivatives', 'Speculative', 'Comedy']
//     },
//     {
//         title: 'Aspects of Jaina Art and Architecture',
//         numberOfPages: 988,
//         authors: ['Bhogilal Mahesh', 'Banners Adris','Agrawala'],
//         genres: ['fiction']
//     },
//     {
//         title: 'Vol II',
//         numberOfPages: 341,
//         authors: ['Bender Ernest'],
//         genres: ['Adventure', 'Historical', 'Satire Science', 'Thriller','Cyberpunk and derivatives']
//     }
// ];

// -знайти наібльшу книжку.
// for (let i = 0; i < books.length; i++) {
//     if(books[i].numberOfPages > books[0].numberOfPages){
//         books[0].numberOfPages  = books[i].numberOfPages;
//     }
// }
// console.log(books[0].numberOfPages);

// - знайти книжку/ки з найбільшою кількістю жанрів
// for (let i = 0; i < books.length; i++) {
//     if(books[i].genres.length > books[0].genres.length){
//         books[0].title  = books[i].title;
//         console.log(books[0].title);
//     }
// }

// - знайти книжку/ки з найдовшою назвою
// for (let i = 0; i < books.length; i++) {
//     if(books[i].title.length > books[0].title.length){
//         books[0].title  = books[i].title;
//         console.log(books[0].title);
//     }
// }

// - знайти книжку/ки які писали 2 автори
// for (let i = 0; i < books.length; i++) {
//     if(books[i].authors.length === 2){
//         console.log(books[i].title);
//     }
// }

// - знайти книжку/ки які писав 1 автор
// for (let i = 0; i < books.length; i++) {
//     if(books[i].authors.length === 1){
//         console.log(books[i].title);
//     }
// }