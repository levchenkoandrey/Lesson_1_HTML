/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log

- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;

Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let a = "hello";
let b = "owu";
let c = "com";
let d = "ua";
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;
console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);

let firstName = "Andrii";
let middleName = "Yurievich";
let lastName = "Levchenko";
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

const A = 100;
const B = '100';
const C = true;
console.log(typeof (A));
console.log(typeof (B));
console.log(typeof (C));

let msg1 = prompt("Введіть Ваше Ім'я");
let msg2 = prompt("Введіть Ваше По-Батькові");
let msg3 = prompt("Введіть Ваше Вік");
let msg3n = Number(msg3);
console.log(msg3n);
let result = `${msg1} ${msg2} вам ${msg3} роки. Мої вітання!!!`;
console.log(result);
