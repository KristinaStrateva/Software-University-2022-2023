function catWalking(input) {
    let minsOfOneWalking = Number(input[0]);
    let walkingsAmountPerDay = Number(input[1]);
    let caloriesTakenForTheDay = Number(input[2]);

    burnedCaloriesPerMin = Number(5);

    let burnedCaloriesPerWalking = minsOfOneWalking * burnedCaloriesPerMin;
    let totalBurnedCalories = burnedCaloriesPerWalking * walkingsAmountPerDay;

    if (totalBurnedCalories >= (0.5 * caloriesTakenForTheDay)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`);
    }
}

catWalking(["15", "2", "500"]);