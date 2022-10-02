let ingredients = ['bread', 'cheese', 'chilli', 'mayoneese'];
let ingredients1 = ['bread', 'cheese', 'Ketchup', 'mayoneese'];
let ingredients2 = ['bread', 'cheese', 'Green chilli', 'mayoneese'];

function sandwichItems(ingredients) {

    for (let i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i]);

    }
}

sandwichItems(ingredients);
sandwichItems(ingredients1);
sandwichItems(ingredients2);