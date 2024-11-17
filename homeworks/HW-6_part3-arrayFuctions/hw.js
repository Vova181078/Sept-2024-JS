// 1. #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень

  let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 =  'javascript is cool';
console.log(str3.length);

// 2. #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
let up1= 'hello world';

let up2 = 'lorem ipsum';

let up3 = 'javascript is cool';

console.log(up1.toUpperCase(),up2.toUpperCase(),up3.toUpperCase());

// 3. #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення

let low1 = 'HELLO WORLD';

let low2 = 'LOREM IPSUM';

let low3 = 'JAVASCRIPT IS COOL';

console.log(low1.toLowerCase(),low2.toLowerCase(),low3.toLowerCase());

// 4. #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
console.log(strDirty.trim());

// 5. #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
   // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    let str = 'Ревуть воли як ясла повні';

function stringToarray(arr) {
 let arrays = arr.split(' ');
   return arrays;

}

let arr = (stringToarray(str));
console.log(arr);


// 6. #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers =  [10,8,-7,55,987,-1011,0,1050,0];

let arrMap = numbers.map(value => {
    return value.toString();
});
console.log(arrMap);

// 7. #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let ascending = [11,21,3];
let descending = [11,21,3];

function sortNums (array,direction) {
    if (direction === 'ascending') return array.sort((a, b) => a - b);
    if (direction === 'descending') return array.sort((a, b) => b - a);

}

console.log(sortNums(nums,ascending));
console.log(sortNums(nums,descending));

// 8. #yo06d74c1C
// - є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration 
})
console.log(coursesAndDurationArray);

let filterCourse = coursesAndDurationArray.filter(value => value.monthDuration > 5);

console.log(filterCourse);

let mapCourse = coursesAndDurationArray.map((value, index) => {
    value.id = index + 1;
    return value;

});
console.log(mapCourse);

// 9.  #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let suits = ['spade', 'diamond','heart', 'clubs'];
let values =  ['6','7','8','9','10', 'ace','jack','queen','king'];

let cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = ({cardSuit: suit, value: value});
        if (suit === 'heart' || suit === 'diamont') {
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);

    }

}
console.log(cards);

//  - знайти піковий туз

// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'))

//  - всі червоні карти

// console.log(cards.find(card => card.color === 'red'));


//  - всі шістки

// console.log(cards.find(card => card.value === '6'));

//  - всі буби

// console.log(cards.find(card => card.cardSuit === 'diamont'));

//  - всі трефи від 9 та більше



// console.log(cards.find(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// 10. #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// cards.reduce(accum, card) => {
//     switch (card,cardSuit) {
//         case 'spade':
//             accum.spades.push(card)
//             break;
//         case 'diamont':
//             accum.diamonds.push(card)
//             break;
//         case 'heart':
//             accum.hearts.push(card)
//             break;
//         case 'club':
//             accum.clubs.push(card)
//             break;
//
//     }
//     return accum:
//   {
//
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// };
//
// console.log(reduce);

// 11. #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
   return  course.modules.includes('saas')
}));

console.log(coursesArray.filter(course => {
    return  course.modules.includes('docker')
}));



