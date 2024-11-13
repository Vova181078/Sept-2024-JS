// 1. #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {
    return a * b
}

console.log(square(5, 4));

// 2. #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function myRadius(radius) {
    return Math.PI * radius * radius;
}

console.log(myRadius(5, 5));

// 3. #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylindr(r, h) {
    return 2 * Math.PI * r * h;
}

console.log(cylindr(8, 7));

// 4. #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayElements(array) {
    for (item of array) {
        console.log(item);

    }
}


// 5. #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function parElement(description) {
    document.write(`<div>
                <p>${description}</p>
       </div>`)
}

parElement('hello');

// 6. #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function listArray(items) {
    document.write(`<ul>
            <li>${items}</li>
            <li>${items}</li>
            <li>${items}</li>
               
                
         </ul>`)
}

listArray('Olya');

// 7. #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function listsArray(text,items) {

    document.write(`<ul>`);
    for (let i = 0; i < items; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listsArray('okten', 5);

// 8. #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function fooArray(array) {
    document.write(`<ul>`);
    for (const item of array) {
          document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`);
}
fooArray([654,65,69,7,'iuhud',';ook;l']);


// 9. #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayUsersKey(users) {
    for (const user of users) {
   document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
arrayUsersKey([
    {id:1, name:'okten',age:28},
    {id:2, name:'okten',age:18},
    {id:3, name:'okten',age:30},

 ]);



//10. #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let f = [15,25,-6,4,78,0];

function minArray(array) {
    let min = array[0];
    for (const arrayElement of array) {
        if (arrayElement < min) {
            min = arrayElement
        }

    }
    return min;
}

console.log(minArray(f));


// 11. #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13



function sum(arr) {
    let count = 0;
    for (const arrElement of arr) {
           count = count + arrElement;

    }
    return count;
}

console.log(sum([1,2,10]));

// 12. #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,iSwap1,iSwap2) {
     let i1 = arr[iSwap1];
      let i2 = arr[iSwap2];
      arr[iSwap1] = i2;
      arr[iSwap2] = i1;
      return arr;
}
swap([11,22,33,44],0,1);

// 13. #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAN,currencyValues,exchangeCurrency ) {
    let chooseCurency;
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chooseCurency = item;
        }
    }
        result = sumUAN / chooseCurency.value;
        return result;

}
    console.log(exchange(10000, [{currency: 'USD', value: 25}, {
        currency: 'EUR',
        value: 42
    }], 'USD'));
