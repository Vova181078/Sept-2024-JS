// 1. #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//

// let buttons = document.getElementsByTagName("button");
// let button = buttons[0];
// button.onclick = function () {
// let text =  document.getElementById('text');
// text.display = 'none';
//
//  }

 

//
//   2.  #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

//  let btn = document.getElementsByClassName("btn");
// btn.onclick = function () {
// let input = document.getElementById("input");
//      if (input.value >= 18) {
//          console.log('you passed checking')
//      }else {
//          console.log('you too young');
//      }
// }



//  3.  #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//

// const target = document.getElementById('target');
//
//
// const someform = document.forms.someform;
// someform.addEventListener('submit', (e) => {
//  e.preventDefault();
//  const nameValue = someform.name.value;
// const surnameValue = someform.surname.value;
// const ageValue = +someform.age.value;
//
//     let obj = {nameValue, surnameValue, ageValue};
// console.log(obj);
// target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue + ' ' + obj.surnameValue;
//
//
// });
//


//  4.  #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let numberPlus = +localStorage.getItem('number');
// numberPlus = numberPlus += 1;
// localStorage.setItem('number', numberPlus);
//
// document.getElementById('target').innerText = numberPlus;
//


//  5.  #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
//

// let sessionList;
// if (localStorage.getItem('sessionList')) {
//     sessionList = JSON.parse(localStorage.getItem('sessionList'));
// } else {
//     sessionList = [];
// }
//
//
// sessionList.push(new Date());
//
// localStorage.setItem('sessionList', JSON.stringify(sessionList));




//
//  6.  #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//

// let input = document.getElementById('converter');
// let resultConverted = document.getElementById('result');
//
// input.oninput = function () {
//    let kilos = +this.value;
//    let result = kilos * 2.2;
//    resultConverted.innerHTML = result;
// }


//  7.  #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addLocalStorage(arrayName,objToAdd) {
//      let lsItem = localStorage.getItem("arrayName");
//      if (lsItem) {
//          throw new Error('not found anything');
//      }
//      let array = JSON.parse(lsItem);
//      if (typeof objToAdd === "object") {
//          array.push(objToAdd);
//      }
//
//      localStorage.setItem("arrayName", JSON.stringify(array));
//
// }
//
// addLocalStorage();



//
//  8.   #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let tableGeneratorForm = document.forms.tableGeneratorForm;
// let table = document.getElementById("table");
//
//
// tableGeneratorForm.onsubmit = function (e) {
//     table.innerText = '';
//     e.preventDefault();
// let tableValue = +tableGeneratorForm.lines.value;
// let cellsValue = +tableGeneratorForm.cells.value;
// let dataValue = tableGeneratorForm.data.value;
//     console.log(tableValue, cellsValue, dataValue);
//
//     for (let i = 0; i < linesValue; i++) {
//          const tr = document.createElement("tr");
//         for (let j = 0; j < cellsValue; j++) {
//                const td = document.createElement("td");
//                td.innerText = dataValue;
//                tr.appendChild(td);
//         }
//
//          table.appendChild(tr);
//     }
//
// }



//
//  9.   #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається





//
//  10.  #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let press = document.getElementById('press');
//
// let arr = [];
// for (let i = 0; i < 100; i++) {
//        arr.push({id: + 1, name: 'kolya' + (i + 1)});
//     console.log(arr);
//
//     let counter = 0;
//     let limit = 10;
//        next.addEventListener('click', function ()  {
//
//              press.innerHTML = '';
//              for (let j = counter; limit < 10; j++) {
//                 const p = document.createElement('p');
//                 p.innerText = arr[j].name;
//                 press.appendChild(p);
//              }
//              counter += 10;
//              limit += 10;
//
//        });
//
// }