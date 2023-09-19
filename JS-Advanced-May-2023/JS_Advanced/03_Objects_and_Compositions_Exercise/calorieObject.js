function calorieObject(input) {
    let productsCalories = {};
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        let product = input[i];
        let calories = Number(input[i + 1]);

        productsCalories[product] = calories;
    }

    console.log(productsCalories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);