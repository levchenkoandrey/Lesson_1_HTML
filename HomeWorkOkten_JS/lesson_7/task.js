// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
for (let i = 0; i < 10; i++) {
    let user = users[i];
    user = new User(i + 1, `user ${i + 1}`, `surNameUser ${i + 1}`, `user${i + 1}@okten.com`, `+38067 ${i}0${i} 25 7${i}`);
    users.push(user);
}
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUsers = users.filter(value => value.id % 2 === 0);
// console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortUsers = users.sort((x, y) => x.id - y.id);
// console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

const clients = [];
clients.push(new Client(1, 'Leanne', 'Graham', 'user1@okten.com', +380675896468, ['milk', 'meat', 'butter']));
clients.push(new Client(2, 'Ervin', 'Howell', 'user2@okten.com', +380673256468, ['milk', 'meat', 'bread', 'butter', 'eggs', 'oats']));
clients.push(new Client(3, 'Clementine', 'Bauch', 'user3@okten.com', +380673125468, ['milk', 'meat', 'rice', 'bread', 'butter']));
clients.push(new Client(4, 'Chelsey', 'Dietrich', 'user4@okten.com', +380678524468, ['milk', 'meat', 'bread', 'potato', 'tomato', 'butter']));
clients.push(new Client(5, 'Dennis', 'Schulist', 'user5@okten.com', +380673256589, ['oats', 'butter']));
clients.push(new Client(6, 'Patricia', 'Lebsack', 'user6@okten.com', +380673253658, ['milk', 'meat', 'curt', 'butter']));
clients.push(new Client(7, 'Kurtis', 'Weissnat', 'user7@okten.com', +380673251248, ['milk', 'meat', 'bread', 'potato', 'tomato', 'butter']));
clients.push(new Client(8, 'Nicholas', 'Runolfsdottir', 'user8@okten.com', +380673567368, ['milk', 'bread', 'butter']));
clients.push(new Client(9, 'Glenna', 'Reichert', 'user9@okten.com', +380675278468, ['milk', 'meat', 'bread', 'beet', 'butter', 'eggs', 'rice']));
clients.push(new Client(10, 'Clementina', 'DuBuque', 'user10@okten.com', +380673973168, ['milk', 'oats', 'meat', 'bread', 'butter']));

// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClients = clients.sort((x, y) => x.order.length - y.order.length);
// console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
}
Car.prototype.info = function () {
    console.log(`model - ${this.model}`);
    console.log(`manufacturer - ${this.manufacturer}`);
    console.log(`maxSpeed - ${this.maxSpeed}`);
    console.log(`graduationYear - ${this.graduationYear}`);
    console.log(`engineCapacity - ${this.engineCapacity}`);
}
Car.prototype.increaseMaxSpeed = function (newValue) {
    this.maxSpeed += newValue;
    console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`);
}
Car.prototype.changeYear = function (newValue) {
    console.log(`Рік випуску авто змінено з ${this.graduationYear} на ${newValue}`);
    this.graduationYear = newValue;

}
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
    console.log(this.driver);
}

// let car = new Car('Subaru', 'Japan', 2017, 240, 2.5)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// console.log(car);
// car.drive();
// car.info();
// car.changeYear(2021);
// car.addDriver({name: 'Andrii', age: 33, driveCategories: ['A','B'], experience: 15});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class ClassCar extends Car {
    constructor(model, manufacturer, graduationYear, maxSpeed, engineCapacity) {
        super(arguments);
    }
}

let constructorCar = new Car('Subaru', 'Japan', 2017, 240, 2.5)
// console.log(constructorCar);
// constructorCar.drive();
// constructorCar.info();
// constructorCar.changeYear(2021);
// constructorCar.addDriver({name: 'Andrii', age: 33, driveCategories: ['A','B'], experience: 15});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [];
cinderellas.push(new Cinderella('Lean', 18, 30));
cinderellas.push(new Cinderella('Ervina', 19, 31));
cinderellas.push(new Cinderella('Clementina', 20, 32));
cinderellas.push(new Cinderella('Chelsey', 21, 33));
cinderellas.push(new Cinderella('Dennisa', 22, 34));
cinderellas.push(new Cinderella('Patricia', 23, 35));
cinderellas.push(new Cinderella('Kurtisiy', 24, 36));
cinderellas.push(new Cinderella('Nicholasiy', 25, 37));
cinderellas.push(new Cinderella('Glenna', 26, 38));
cinderellas.push(new Cinderella('Clementina', 27, 39));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, foundSize) {
        this.name = name;
        this.age = age;
        this.foundSize = foundSize;
    }
}

let princeArray = [new Prince('Richard', 30, Math.floor(Math.random() * 10 + 30))];

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let cinderella of cinderellas) {
//     (cinderella.footSize === princeArray[0].foundSize) ? console.log(` Mr ${princeArray[0].name} looking for ${princeArray[0].foundSize} found ${cinderella.name} with ${cinderella.footSize} size`) : 'defolt';}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// console.log(cinderellas.find(cinderella => cinderella.footSize === princeArray[0].foundSize));

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//              street: 'Kulas Light',
//              suite: 'Apt. 556',
//              city: 'Gwenborough',
//              zipcode: '92998-3874',
//              geo: {
//                  lat: '-37.3159',
//                  lng: '81.1496'
//                   }
//              },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//              name: 'Romaguera-Crona',
//              catchPhrase: 'Multi-layered client-server neural-net',
//              bs: 'harness real-time e-markets'
//              }
// }

function User(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: geoLat,
            lng: geoLng
        }

    };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: companyBs
    };
}

let newUser = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556',
    'Gwenborough', 92998 - 3874, -37.3159, 81.1496, 1 - 770 - 736 - 8031 - 56442, 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(newUser);