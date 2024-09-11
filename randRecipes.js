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
        "fry",
        "boil",
        "grill",
        "roast",
        "steam"
        ]

    const randUtensil = [
        "spatula",
        "tong",
        "pot",
        "pan",
        "microwave",
        "pressure cooker"
    ]

const time = Math.floor(Math.random() * 10)
const ingredient = randIngredient[Math.floor(Math.random() * randIngredient.length)];
const cookingMethod = randCookingMethod[Math.floor(Math.random(Math.floor() * randCookingMethod))];
const utensil = randUtensil[Math.floor(Math.random() * randUtensil.length)];

const randomizedRecipe = `${cookingMethod} the ${ingredient} for ${time} minutes using a ${utensil}.`
}

randomRecipe()