// 1. #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id,name,surname,email,phone) {
     this.id = id;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;

}
let users = [
    new User(2,'Petia','Orihiv','idjv@gmail1.com','606254632'),
    new User(1,'Petya','Orihov','idjv@gmail.com','60654632'),
    new User(5,'Olya','Damkiv','yukjp;.h@gmail.com','687465165'),
    new User(4,'Olya','Dertyiv','yukjh@gmail.com','687465165'),
    new User(3,'Olya','Damkiv','yukjh@gmail.com','687465165'),
    new User(6,'kOlya','Dalkjhiv','yukjh@gmail.com','687465165654'),
    new User(7,'ilya','iuhnjkiv','yukmnbh@gmlkjail.com','68746516585'),
    new User(9,'Olkja','Damkiv','yuk.;pknjh@gmail.com','6877512465165'),
    new User(10,'O;lkhna','Dakjhgkiv','yukjh@gmail.com','687465165'),
    new User(8,'kjnya','Dalkjhgmkiv','yukjh@gmail.com','6874651657814'),
]
console.log(users);

// 2. #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let userFilter = users.filter(value => value.id % 2 === 0)

console.log(userFilter);

// 3. #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userSort = users.sort((a, b) => a.id - b.id);

console.log(userSort);

// 4. #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {

    constructor(id,name,surname,phone,order) {
        super(id,name,surname,phone);
        this.order = order;
    }
}

let client =[
    new Client(2,'Petia','Orihiv','idjv@gmail1.com','606254632','kjhkljh'),
    new Client(1,'Petya','Orihov','idjv@gmail.com','60654632','kjhkljh'),
    new Client(5,'Olya','Damkiv','yukjp;.h@gmail.com','687465165','kjhkljh'),
    new Client(4,'Olya','Dertyiv','yukjh@gmail.com','687465165','kjhkljh'),
    new Client(3,'Olya','Damkiv','yukjh@gmail.com','687465165','kjhkljh'),
    new Client(6,'kOlya','Dalkjhiv','yukjh@gmail.com','687465165654','kjhkljh'),
    new Client(7,'ilya','iuhnjkiv','yukmnbh@gmlkjail.com','68746516585','kjhkljh'),
    new Client(9,'Olkja','Damkiv','yuk.;pknjh@gmail.com','6877512465165','kjhkljh'),
    new Client(10,'O;lkhna','Dakjhgkiv','yukjh@gmail.com','687465165','kjhkljh'),
    new Client(8,'kjnya','Dalkjhgmkiv','yukjh@gmail.com','6874651657814','kjhkljh'),

]
console.log(client);

// 5. #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientSort = client.sort((a, b) => a.order - b.order);
console.log(clientSort);


// 6. #vV9a6584I5     ЧЧАСТКОВО СПИСАВ  не зрозумів : Change year i Add driver
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producent,year,maxdrive,power) {
//
//     this.model = model;
//     this.producent = producent;
//     this.year = year;
//     this.maxdrive = maxdrive;
//     this.power = power;
//     this. drive = function () {
//         console.log(`drive speed ${this.maxdrive} per hour`);
//     }
//     this.info = function () {
//         for (const key in this) {
//             console.log(key,this[key]);
//         }
//     }
//     this.increaseMaxSpeed  = function (newSpeed) {
//         this.maxdrive = this.maxdrive + newSpeed;
//
//     }
//     this.changeYear = function  (newValue) {
//          this.year = newValue;
//     }
//     this.addDriver = function  (driverObject) {
//          this.driver = driverObject;
//     }
//
//
// }
// let car = new Car('kjhkj','pwlskm',2020,200,700);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(200);
// console.log(car);
// car.changeYear(2010);
// console.log(car);
// car.addDriver({});
// console.log(car);


// 7. #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producent, year, maxdrive, power) {


        this.model = model;
        this.producent = producent;
        this.year = year;
        this.maxdrive = maxdrive;
        this.power = power;
    }

    drive() {
        console.log(`drive speed ${this.maxdrive} per hour`);
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxdrive = this.maxdrive + newSpeed;

    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driverObject) {
        this.driver = driverObject;
    };

}

const car = new Car('kjhkj','pwlskm',2020,200,700);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(200);
console.log(car);
car.changeYear(2010);
console.log(car);
car.addDriver({});
console.log(car);



// 8. #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку



 class Popeluha {
     constructor(name,age,sizeFoot,) {
         this.name = name;
         this.age = age;
         this.sizeFoot = sizeFoot;
     }

 }

 class Prince {

     constructor( name,
                   age,
                   foundShoes) {
         this.name = name;
             this.age = age;
             this.foundShoes = foundShoes;
     }

 }
let arrayPopeluha = [
    new Popeluha('Olla', 20,  23),
    new Popeluha('Katia',21,  24),
    new Popeluha( 'Ira', 22,  25),
    new Popeluha( 'Ania', 23,  26),
    new Popeluha('Halia', 24,  27),
    new Popeluha('Nata', 25,  28),
    new Popeluha( 'Zoja', 26,  29),
    new Popeluha('Agata', 27,  30),
    new Popeluha( 'Masha', 28,  31),
    new Popeluha( 'Sveta', 29,  32),
]

const prince = new Prince('Petya', 30, 23);

for (Popeluha of arrayPopeluha) {
    if (Popeluha.sizeFoot === prince.foundShoes) {
        console.log(Popeluha);
    }

}

const find = arrayPopeluha.find(arrayPopeluha => arrayPopeluha.sizeFoot === prince.foundShoes);
console.log(find);


 

// 9. #gsKLAsNWM   СПИСАВ
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const yourArray = (this)
    for (const item of yourArray) {
          callback(item);
    }
};
[1,8,5].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
       const arr = [];
    for (const arrElement of arr) {
        if (predicate(arrElement)) {
            arr.push(arrElement)
        }
         return arr;
    }
    

}
let users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = users1.myFilter((user1) => user1.name);
console.log(result);