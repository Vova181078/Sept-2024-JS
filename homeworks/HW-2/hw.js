// 1 Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [5, 'jhkhgj', 10, -465, 'hbkmnvlkj', 'mn.lkn.', 5552, 'hkljnk', 9, 10];
console.log(arr);
//
// #LARqoUj5I
// 2 Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let donnaTartt = {
    title: 'Donna Tartt',
    pagges: 100,
    genre: 'roman',
}
console.log(donnaTartt);

let forAgreements = {
    title: 'For Agreements',
    pagges: 200,
    genre: 'adventure',

}
console.log(forAgreements);

let thinkAndRich ={
    title: 'Think and Rich',    pagges: 1020,
    genre: 'action',
}
console.log(thinkAndRich);


//     #sA3Gg1sCp
// 3  Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let donnaTartt1 = {
    title: 'Donna Tartt',
    pagges: 100,
    genre: 'roman',
    authors: ['Donna Tartt', 'Deo Deker'],
}
console.log(donnaTartt1);

let forAgreements1 = {
    title: 'For Agreements',
    pagges: 200,
    genre: 'adventure',
    authors: ['Migel Luis', 'Deo Hikjkjn', 'I kokos'],

}
console.log(forAgreements1);

let thinkAndRich1 ={
    title: 'Think and Rich',
    pagges: 1020,
    genre: 'action',
    authors: ['Napoleon Hill', 'Deo Hikjkjn', 'I abricos'],
}
console.log(thinkAndRich1);




//     #jCHFnEbdmFd
// 4 Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersArray = [
    {name: 'vasya', username: 'vas', password: 54516},
    {name: 'petya', username: 'pet', password: 68406},
    {name: 'kolya', username: 'kol', password: 6811},
    {name: 'olya', username: 'ol', password: 68106},
    {name: 'max', username: 'mix', password: 816},
    {name: 'anya', username: 'ani', password: 686},
    {name: 'oleg', username: 'olig', password: 8716},
    {name: 'andrey', username: 'andr', password: 61605},
    {name: 'masha', username: 'mashk', password: 84068},
    {name: 'olya', username: 'olg', password: 740654},

];
console.log(usersArray[0].password);
console.log(usersArray[1].password);
console.log(usersArray[2].password);
console.log(usersArray[3].password);
console.log(usersArray[4].password);
console.log(usersArray[5].password);
console.log(usersArray[6].password);
console.log(usersArray[7].password);
console.log(usersArray[8].password);
console.log(usersArray[9].password);


// #coYydZuaeEB
// 5 Oписати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weekWeather = [
    {
        Monday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Tuesday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Wednesday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Thursday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Friday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Saturday: ['morning +5', 'afternoon + 20', 'evening +5']
    },
    {
        Sunday: ['morning +5', 'afternoon + 20', 'evening +5']
    }
];
console.log(weekWeather);


// Логічні розгалуження:

    // #bAUsaq6LI
    // 6 Є змінна х, якій ви надаєте довільне числове значення.
    // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
 if (x === 0) {
     console.log(true);
 }else {
     console.log(false);
    }


console.log(x);

let a = 1;
if (a === 1) {
    console.log(true);
}else {
    console.log(false);
}


console.log(a);

let a1 = 0;
if (a1 === 0) {
    console.log(true);
}else {
    console.log(false);
}


console.log(a1);
let a2 = -3;
if (a2 === -4) {
    console.log(true);
}else {
    console.log(false);
}


console.log(a2);


// #3ckURgvs
// 7 Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = '';

if (time <= 15) {
    console.log('1 part');
}else if (time >= 15 && time <= 30) {
    console.log('2 part');
}else if (time >= 30 && time <= 45) {
    console.log('3 part');
} else if (time >= 45 && time <= 59) {
    console.log('4 part');
} else  {
    console.log('finish');
}


// #UMoNq4biWGe
//  8 У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = '';

if (day < 10) {
    console.log('1 decada');
}else if (day > 10 && day < 20 ) {
    console.log('2 decada');
}else if (day > 20 && day < 31 ) {
    console.log('3 decada');
}


//#KzrtqyQ
// 9 Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = 0;
switch (week) {
    case 0: 1;
        console.log('monday')
        break;
    case 1: 2;
        console.log('tuesday');
        break;
    case 2: 3;
        console.log('wednesday');
        break;
    case 3: 4;
        console.log('thursday');
        break;
    case 4: 5;
        console.log('friday');
        break ;
    case 5: 6;
        console.log('Saturday');
        break;
    case 6: 7;
        console.log('sunday');
        break;
    default:
        console.log('check is finished')

}


    // #uwsz1RnTQJ1
    // 10 Користувач вводить або має два числа.
    //     Потрібно знайти та вивести максимальне число з тих двох .
    //     Також потрібно врахувати коли введені рівні числа.

let g = '7';
let h = '5';

if (g < h ) {
    console.log(h);
} else if (g > h ) {
    console.log(g);

}else {
    console.log(g, h);
}


    //     #iBvqtjEm
    // 11 є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

 let v;
if (v === undefined || v === null || v === NaN || v === '') {

     v = 'default';
}
console.log(v)




    // #awLXL6TBzg
    // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('super');
}

