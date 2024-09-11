function randomRecipe() {
    const randIngredient = [
        "pasta",
        "chicken",
        "bacon",
        "beef",
        "tuna",
        "potatoes"   
    ];

    const randCookingMethod = [
        "Fry",
        "Boil",
        "Grill",
        "Roast",
        "Steam"
        ]

    const randUtensil = [
        "spatula",
        "tong",
        "pot",
        "pan",
        "microwave",
        "pressure cooker"
    ]

const time = Math.floor(Math.random() * 10) + 1;
const ingredient = randIngredient[Math.floor(Math.random() * randIngredient.length)];
const cookingMethod = randCookingMethod[Math.floor(Math.random(Math.floor() * randCookingMethod.length))];
const utensil = randUtensil[Math.floor(Math.random() * randUtensil.length)];

const randomizedRecipe = `${cookingMethod} the ${ingredient} for ${time} minutes using a ${utensil}.`;

console.log(randomizedRecipe);
}

randomRecipe()