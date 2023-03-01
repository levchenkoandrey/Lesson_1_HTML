// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.innerText = 'hello!';
// document.body.appendChild(div);
// document.body.append(div.cloneNode(true));

// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const menu = ['Main','Products','About us','Contacts'];
// let ul = document.createElement('ul');
// ul.classList.add('menu');
// for (const item of menu) {
//     let li = document.createElement('li')
//     li.innerText = item;
//     ul.append(li);
// }
// document.body.append(ul);

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = ` Course   "${course.title}" lasts : ${course.monthDuration} Months`;
//     document.body.appendChild(div);
// }
// =========================
//
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//         div.classList.add('item');
//     let h1 = document.createElement('h1');
//         h1.classList.add('heading');
//         h1.innerText = course.title;
//     let p = document.createElement('p');
//         p.classList.add('description');
//         p.innerText = `${course.monthDuration}  months`;
//     div.append(h1, p);
//     document.body.appendChild(div);
// }

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// let container = document.createElement('div');
// container.classList.add('container')
// for (const simpson of simpsons) {
//
//     let div = document.createElement('div');
//     div.classList.add('member');
//     div.innerHTML = `<img src="${simpson.photo}">
//                         <h1>${simpson.name} ${simpson.surname} is ${simpson.age} years</h1>
//                         <p>${simpson.info}</p>`;
//     container.append(div);
//     document.body.appendChild(container);
// }

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
//     let coursesArray = [
//         {
//             title: 'JavaScript Complex',
//             monthDuration: 5,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//         },
//         {
//             title: 'Java Complex',
//             monthDuration: 6,
//             hourDuration: 839,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'java core',
//                 'java advanced']
//         },
//         {
//             title: 'Python Complex',
//             monthDuration: 6,
//             hourDuration: 459,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'python core',
//                 'python advanced']
//         },
//         {
//             title: 'QA Complex',
//             monthDuration: 4,
//             hourDuration: 509,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//         },
//         {
//             title: 'FullStack',
//             monthDuration: 7,
//             hourDuration: 901,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'react',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'node.js',
//                 'python',
//                 'java']
//         },
//         {
//             title: 'Frontend',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//         }
//     ];
//     let main = document.createElement('div');
//     main.classList.add('main');
//     for (const course of coursesArray) {
//         let containerCourse = document.createElement('div');
//         containerCourse.classList.add('container_course');
//
//         let title = document.createElement('div');
//         title.innerHTML = `<h1>${course.title}</h1>`;
//         title.classList.add('section');
//
//         let monthDuration = document.createElement('div');
//         monthDuration.innerHTML = `<h2>Duration ${course.monthDuration} months</h2>`;
//         monthDuration.classList.add('section', 'width_25');
//
//         let hourDuration = document.createElement('div');
//         hourDuration.innerHTML = `<h2>and ${course.hourDuration} hours</h2>`;
//         hourDuration.classList.add('section', 'width_73');
//
//
//         let modules = document.createElement('div');
//             for (const item of course.modules) {
//                 let module = document.createElement('div');
//                 module.classList.add('section')
//                 module.innerHTML = `<h2>${item}</h2>`;
//                 modules.appendChild(module);
//             }
//         modules.classList.add('section', 'module');
//         containerCourse.append(title, monthDuration, hourDuration, modules);
//         document.body.appendChild(containerCourse);
//     }


// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
// let button = document.getElementById('button');
// let text = document.getElementById('text');
// button.addEventListener('click', function () {
//     text.style.display = 'none';
// });
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// let form = document.forms.form;
// form.onsubmit = function (ev) {
//     (this.input.value >= 18) ? alert('You are older than 18') : alert('You are younger than 18');
// };

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)