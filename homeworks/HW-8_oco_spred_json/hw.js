// 1. #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

// Списав

// function cloner(obj) {
//     if (obj) {
//         let function = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj.[key].bind({});
//                 function.push({functionClone, key});
//             }
//
//         }
//
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of function) {
//               cloneObj[func.key] = func.functionClone;
//         }
//         console.log(cloneObj);
//         return cloneObj
//     }
//     throw new Error('!!!!!');
//
// }
// const clone = cloner({id: 65, name: 'kjk;lk', greeting() {
//         console.log('hello')}, foo() {
//         console.log('bar')}});
// clone.foo();





// 2.  #iz6emEsP2BA
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((courseValue, index) => ({...courseValue, id: index + 1})));

