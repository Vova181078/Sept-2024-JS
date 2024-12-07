// <!--#whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути в списку під час відображення.-->
//


const infoRecipes = document.getElementsByClassName('infoRecipes')[0];



fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then (recipesObj =>  {
        let {recipes} = recipesObj;
        // console.log(recipes);

        for (const recipe of recipes) {
            const recipeDiv =  document.createElement('div');
            for (const recipeKey in recipe) {
             if (Array.isArray(recipe[recipeKey])) {
                 const ol = document.createElement('ol');
                 const array = recipe[recipeKey];
                 for (const item of array) {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ol.appendChild(li);
                 }
                 recipeDiv.appendChild(ol);
              }else {
                 const keyDiv = document.createElement('div');
                 keyDiv.textContent = `${recipeKey} : ${recipe[recipeKey]}`
                 recipeDiv.appendChild(keyDiv);

             }
            }


            }


            infoRecipes.appendChild(recipeDiv);
        };




