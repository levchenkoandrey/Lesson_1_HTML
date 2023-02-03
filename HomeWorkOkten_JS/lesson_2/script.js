//Масиви та об'єкти:
    //- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
    //- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
    //- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);

const book1 = {
    title: 'book1',
    pageCount: 264,
    genre: 'fantasy'
};
const book2 = {
    title: 'book2',
    pageCount: 754,
    genre: 'drama'
};
const book3 = {
    title: 'book3',
    pageCount: 291,
    genre: 'science'
};

book1.authors = [{name: 'vasy', age: 33}];
book2.authors = [{name: 'pety', age: 31}];
book3.authors = [{name: 'koly', age: 27}];
console.log(book1,book2,book3);

const users= [
    {name: 'vasy',
    userName: 'wer',
    password: 'asdf123'},
    {name: 'pety',
    userName: 'wery',
    password: 'asdf1234'},
    {name: 'koly',
    userName: 'mer',
    password: 'asdf1235'},
    {name: 'vity',
    userName: 'mery',
    password: 'asdf1236'},
    {name: 'lena',
    userName: 'kos',
    password: 'asdf1237'},
    {name: 'oly',
    userName: 'kakos',
    password: 'asdf1238'},
    {name: 'andrii',
    userName: 'der',
    password: 'asdf1239'},
    {name: 'vika',
    userName: 'paf',
    password: 'asdf12310'},
    {name: 'toly',
    userName: 'lala',
    password: 'asdf12311'},
    {name: 'sveta',
    userName: 'net',
    password: 'asdf12312'}
];
console.log(users[0]['password'],users[1]['password'],users[2]['password'],users[3]['password'],users[4]['password'],
            users[5]['password'],users[6]['password'],users[7]['password'],users[8]['password'],users[9]['password'],);

//Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
    //Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
 if (x !== 0){
     console.log('Вірно');
 }else {
     console.log('Невірно');
 };

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
    //(в першу, другу, третю или четверту частину години).
let time = 0;
    if(time >= 0 && time < 15){
        console.log('першa частинa години');
    }else if(time > 14 && time < 30){
        console.log('другa частинa години');
    }else if(time > 29 && time < 45){
        console.log('третя частинa години');
    }else {
        console.log('четвертa частинa години');
    };

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
    if(day > 0 && day < 11){
        console.log('Перша декада');
    }else if(day > 10 && day < 21){
        console.log('Друга декада');
    }else{
        console.log('Третя декада');
    };

//- Скласти розклад на тиждень за домопоги switch.
    // Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let question = +prompt('введиіь порядковий номер дня тижня')
switch (question){
    case 1:
        alert('Sunday');
        break;
    case 2:
        alert('Monday');
        break;
    case 3:
        alert('Tuesday');
        break;
    case 4:
        alert('Wednesday');
        break;
    case 5:
       alert('Thursday');
        break;
    case 6:
        alert('Friday');
        break;
    default:
        alert('Saturday');
};

//- Користувач вводить або має два числа.
    //Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Введіть число A');
let b = +prompt('Введіть число B');
if(a < b){
    alert('B');
}else  if(a > b){
    alert('A');
}else {
    alert('Числа рівні');
};

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let z;
console.log((z) ? z : z ='default');

    //- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
    // За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    if ( Object.values(coursesAndDurationArrayElement)[1] > 5 ) {
        console.log("Супер");
    }
    };
