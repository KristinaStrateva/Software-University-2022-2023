function foodForPets(input) {
    let index = 0;
    let daysAmount = Number(input[index]);
    index++;
    let totalFoodAmount = Number(input[index]);
    index++;

    let totalDogsAmount = 0;
    let totalCatsAmount = 0;
    let totalBisquitAmount = 0;
    let totalEatenFood = 0;

    for (let i = 1; i <= daysAmount; i++) {
        let currentDogsFood = Number(input[index]);
        index++;
        let currentCatsFood = Number(input[index]);
        index++;

        totalDogsAmount += currentDogsFood;
        totalCatsAmount += currentCatsFood;

        let totalFoodForTheDay = currentDogsFood + currentCatsFood;

        if (i % 3 === 0) {
            let currentBisquit = 0.1 * totalFoodForTheDay;
            totalBisquitAmount += currentBisquit;
        }

        totalEatenFood += totalFoodForTheDay;
    }

    let percentEatenFood = (totalEatenFood / totalFoodAmount) * 100;
    let percentEatenFromDog = (totalDogsAmount / totalEatenFood) * 100;
    let percentEatenFromCat = (totalCatsAmount / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBisquitAmount)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFromDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFromCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"]);