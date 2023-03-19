// Стоврити форму з трьома полями для name,sruname,age та кнопкою.При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// const form = document.forms[0];
// form.onsubmit = function (eo){
//     eo.preventDefault();
//     const user = {};
//     user.name = this.userName.value;
//     user.surname = this.userSurname.value;
//     user.age = this.userAge.value;
//         const div = document.createElement('div');
//         div.classList.add('index');
//         div.innerHTML = `<h1> -- ${user.name} ${user.surname} : ${user.age}</h1><br>`;
//         document.body.appendChild(div);
// }
// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// const num = document.getElementById("num");
// num.classList.add('number');
// let number = parseInt(localStorage.getItem("number"));
// if (isNaN(number)) {
//     number = 0;
// }
// number++;
// localStorage.setItem("number", number);
// num.textContent = number;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// function indexVisit() {
//     let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
//     let date = new Date();
//     let visit = {
//         date: date.toLocaleDateString(),
//         time: date.toLocaleTimeString(),
//     };
//     sessions.push(visit);
//     localStorage.setItem("sessions", JSON.stringify(sessions));
// }
// function displaySessions() {
//     let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
//     let sessionList = document.getElementById("sessionList");
//     for (let session of sessions) {
//         let listItem = document.createElement("li");
//         let dateItem = document.createElement("span");
//         let timeItem = document.createElement("span");
//         dateItem.innerHTML = session.date + " ";
//         timeItem.innerHTML = session.time;
//         listItem.append(dateItem, timeItem);
//         sessionList.appendChild(listItem);
//     }
// }

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let currentPage = 1;
        const userPerPage = 5;
        const ul = document.getElementById("userList");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                displayPage(currentPage);
            }
        });
        nextButton.addEventListener("click", () => {
            if (currentPage < Math.ceil(posts.length / userPerPage)) {
                currentPage++;
                displayPage(currentPage);
            }
        });
        function displayPage(page) {
            const startIndex = (page - 1) * userPerPage;
            const endIndex = startIndex + userPerPage - 1;
            ul.innerHTML = "";
            for (let i = startIndex; i <= endIndex; i++) {
                if (posts[i]) {
                    const li = document.createElement('li');
                    li.classList.add('user');
                    li.innerHTML += `<h2>userId : ${posts[i].userId}</h2> <h4>id : ${posts[i].id}</h4>
                                <h4>${posts[i].title}</h4> <p>${posts[i].body}</p>`;
                    ul.appendChild(li);
                }
            }
        }
        displayPage(currentPage);
    })
// =========================

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// const table = document.createElement('table');
// function createTable() {
//     const rows = document.getElementById('lines').value;
//     const columns = document.getElementById('columns').value;
//     const content = document.getElementById('content').value;
//     table.innerText = '';
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerText = content;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }
// document.body.appendChild(table);
