// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let rest = [];
// const cutString = (str, n) => {
//     for (let i =0; i < str.length; i++) {
//         console.log(str.length)
//         if (str.length > n) {
//             rest.push(str.substring(0, n));
//             str = str.substring(n);
//         }
//         if (str.length < n) {
//             rest.push(str);
//         }
//     }
//     return rest;
//
// }
// document.write(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, n) => str.substring(0, n);
// document.writeln(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// const insert_dash = str => str.toUpperCase().replaceAll(' ', '-');
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "html JavaScript PHP"
// const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
// document.write(upperFirst(str));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// const normalizer = arr => {
//     document.write('<ul>');
//     for (const name of arr) {
//         let newString = name.replace(/\p{P}/gu, " ");
//         document.write(`<li> ${newString} </li>`);
//     }
//     document.write('</ul>');
// }
// normalizer([n1,n2,n3]);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const arr = [];
// const random = n => {
//     for (let i = 0; i < 30; i++) {
//         arr.push(Math.floor(Math.random() * n));
//     }
// };
// random(100);
// console.log(arr);
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// const filterAndSortNum = arr.filter(value => (value % 2=== 0 && value !== 0)).sort((a,b) => a-b);
// console.log(filterAndSortNum);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'каждый охотник желает знать';
// const newString = str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
// console.log(newString);

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// function normalizer(mail){
//     if(mail.indexOf('@') >= 0){
//     let valid = mail.split('@');
//         if (valid[0].indexOf('.') >= 0 || valid[1].indexOf('.') < 2 ) {
//             console.log('email is not valid');
//         }
//     else{
//         console.log('email is  valid');
//     }
//     }
//     return ;
// }
// normalizer('somEemail@gmail.com');
// normalizer('someeMAIL@gmail.com');
// normalizer('someeMAIL@i.ua');
// normalizer('some.email@gmail.com');
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масивlet
// const coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// const sortKey = coursesArray.sort((x, y) => y.modules.length - x.modules.length);
// console.log(sortKey);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// const count = (str, symb) => str.split(symb).length - 1;
// document.writeln(count(str, symb)) // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
