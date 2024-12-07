// <!--#HmvAfRQM-->
// <!-- - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. -->
//     <!--Відобразити всі поля кожної корзини.-->

const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObj => {
        const {carts} = cartsObj;


        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-conteiner');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `

      "total": ${cart.total} ,
      "discountedTotal": ${cart.discountedTotal},
      "userId": ${cart.userId},
      "totalProducts":${cart.totalProducts},
      "totalQuantity":${cart.totalQuantity}`


            const ol = document.createElement('ol');
            for (product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                   "id": ${product.id},
                   "title": ${product.title},
          "price":${product.price},
          "quantity": ${product.quantity},
          "total":${product.total},
          "discountPercentage": ${product.discountPercentage},
          "discountedTotal": ${product.discountedTotal}`


                ol.appendChild(li);



            }
            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);
        }
    });

