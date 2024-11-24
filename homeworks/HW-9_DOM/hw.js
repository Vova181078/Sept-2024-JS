// 1. #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let mainDiv = document.createElement("div");
mainDiv.classList.add("wrap","collapse","alpha","beta");
mainDiv.innerText = "Hello Okten";
document.body.appendChild(mainDiv);
// mainDiv.cloneNode(true).appendChild(mainDiv);






//
// 2.    #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

let arr = ['Main','Products','About us','Contacts'];

let ul = document.createElement("ul");

for (const element of arr) {
let li = document.createElement("li");
li.innerText = element;

ul.appendChild(li);
document.body.appendChild(ul);
}




// 3. #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray1) {
       let div = document.createElement("div");
       div.innerText = `${course.title} , ${course.monthDuration}`;
       document.body.appendChild(div);
       console.log(course);


}



//
// =========================
//   4.  #Kx1xgoKy8
//     - Є масив
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course2 of coursesAndDurationArray2) {
     let courseInfo = document.createElement('div');
     courseInfo.classList.add('item');

     let h1 = document.createElement('h1');
     h1.innerText = course2.title;
     h1.classList.add('heading');

     let p = document.createElement('p');
     p.innerText = course2.monthDuration;
     p.classList.add('description');

     courseInfo.append(h1,p);


     document.body.appendChild(courseInfo);
  

}
