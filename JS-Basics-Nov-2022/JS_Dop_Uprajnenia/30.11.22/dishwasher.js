function dishwasher(input) {
    let index = 0;
    let bottlesOfDishSoap = Number(input[index]);
    index++;
    let dishesAmount = input[index];
    index++;

    let totalDishSoapQuantity = bottlesOfDishSoap * 750;

    let loadingAmount = 0;
    let washedPlatesAmount = 0;
    let washedPotsAmount = 0;

    while (dishesAmount !== "End") {
        dishesAmount = Number(dishesAmount);

        loadingAmount++;

        if (loadingAmount % 3 === 0) {
            washedPotsAmount += dishesAmount;
            let dishSoapNeeded = dishesAmount * 15;
            totalDishSoapQuantity -= dishSoapNeeded;
        } else {
            washedPlatesAmount += dishesAmount;
            let dishSoapNeeded = dishesAmount * 5;
            totalDishSoapQuantity -= dishSoapNeeded;
        }

        if (totalDishSoapQuantity < 0) {
            let dishSoapNeeded = Math.abs(totalDishSoapQuantity);
            console.log(`Not enough detergent, ${dishSoapNeeded} ml. more necessary!`);
        return;
        }

        dishesAmount = input[index];
        index++;
    }

    let dishSoapLeft = totalDishSoapQuantity;
    console.log("Detergent was enough!");
    console.log(`${washedPlatesAmount} dishes and ${washedPotsAmount} pots were washed.`);
    console.log(`Leftover detergent ${dishSoapLeft} ml.`);
}

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);