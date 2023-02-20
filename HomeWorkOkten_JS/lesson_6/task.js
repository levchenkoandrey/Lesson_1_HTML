
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//let str1 = 'hello world';
//let str2 = 'lorem ipsum';
//let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(str1.toUpperCase().toLowerCase());
// console.log(str2.toUpperCase().toLowerCase());
// console.log(str3.toUpperCase().toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(' ','').replaceAll('dirty', 'dirty '));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// const stringToArray = str => str.split(' ');
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let result = arr.map(String);
// console.log(result);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//     let nums = [11,21,3];
//     const sortNums = (arr ,direction) => (direction === 'ascending') ? arr.sort((x, y) => x - y) :
//                                          (direction === 'descending') ? arr.sort((x, y) => y - x) : 'defold';
//     console.log(sortNums(nums, 'ascending'));
//     console.log(sortNums(nums,'descending'));
//     console.log(sortNums(nums,'deescending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// const sortCurs = coursesAndDurationArray.sort((x, y) => y.monthDuration - x.monthDuration).filter(x => x.monthDuration > 5).map(function (value, index) {
//     return {id: index + 1, ...value}
// });
// console.log(sortCurs);

//     описати колоду карт (від 6 до туза без джокерів)
// const suits = ['heart', 'club', 'diamond', 'spade']
// const cards = [{name: 'ace'}, {name: 'king'}, {name: 'queen'}, {name: 'jack'}, {name: '10'}, {name: '9'}, {name: '8'}, {name: '7'}, {name: '6'}]
// const color = ['red','black'];
// const deck = {hearts:[],clubs:[],diamonds:[],spades:[],};
// for (let item of suits) {
//     for (let card of cards) {
//         if(item ==='heart'){
//             deck.hearts.push({suit: item, name: card.name, color: color[0]})}
//         if(item ==='club'){
//             deck.clubs.push({suit: item, name: card.name, color: color[1]})}
//         if(item ==='diamond'){
//             deck.diamonds.push({suit: item, name: card.name, color: color[0]})}
//         if(item ==='spade'){
//             deck.spades.push({suit: item, name: card.name, color: color[1]})}
//     }
// }
// console.log(deck)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// const aceOfSpades = deck.spades.filter( value => value.name === 'ace');
// const sixes = [];
// for (const deckValue in deck) {
//     for (const item of deck[deckValue]) {
//            if(item.name === '6'){
//                  sixes.push(item);
//            }
//     }
// }
// const redCards = deck.hearts.concat(deck.diamonds);
// const diamonds = deck.diamonds;
// const clubs9plus = deck.spades.filter( value => (value.name !== '8' && value.name !== '7' && value.name !== '6'));
// console.log(aceOfSpades);
// console.log(sixes);
// console.log(redCards);
// console.log(diamonds);
// console.log(clubs9plus);

//  - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//   -*************  ПЕРЕПРОШУЮ, вже  ***********-
// {
//     spades:[],
//     Diamonds:[],
//     hearts:[],
//     clubs:[]
// }

//  - взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
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
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
// const arr = []
// coursesArray.filter( value => {
//     for (const item of value.modules) {
//         (item === 'sass') ?  arr.push(value): (item === 'docker')? arr.push(value) :'defolt'
//     }
// })
// console.log(arr);



