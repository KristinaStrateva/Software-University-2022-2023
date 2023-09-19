function petsFood(input) {
    let daysGone = Number(input[0]);
    let foodLeftKg = Number(input[1]);
    let dogFoodPerDayKg = Number(input[2]);
    let catFoodPerDayKg = Number(input[3]);
    let turtleFoodPerDayGrams = Number(input[4]);

    let turtleFoodPerDayKg = turtleFoodPerDayGrams / 1000;

    let totalDogFood = dogFoodPerDayKg * daysGone;
    let totalCatFood = catFoodPerDayKg * daysGone;
    let totalTurtleFood = turtleFoodPerDayKg * daysGone;

    let totalFood = totalDogFood + totalCatFood + totalTurtleFood;

    if (foodLeftKg >= totalFood) {
        console.log(`${Math.floor(foodLeftKg - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFood - foodLeftKg)} more kilos of food are needed.`);
    }
}

petsFood(["5", "10", "2.1", "0.8", "321"]);