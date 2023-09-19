function careOfPuppy(input) {
    let index = 0;
    let foodBoughtKg = Number(input[index]);
    index++;
    let foodEatenGrams = input[index];
    index++;

    let foodBoughtGrams = foodBoughtKg * 1000;

    let totalEatenFood = 0;

    while (foodEatenGrams !== "Adopted") {
        foodEatenGrams = Number(foodEatenGrams);

        totalEatenFood += foodEatenGrams;

        foodEatenGrams = input[index];
        index++;
    }

    if (totalEatenFood <= foodBoughtGrams) {
        console.log(`Food is enough! Leftovers: ${foodBoughtGrams - totalEatenFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalEatenFood - foodBoughtGrams} grams more.`);
    }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);