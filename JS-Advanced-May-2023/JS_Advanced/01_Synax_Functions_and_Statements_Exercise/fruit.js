function calculateBill(fruitType, grams, pricePerKg) {
    let weightInKg = grams / 1000;

    let bill = weightInKg * pricePerKg;

    console.log(`I need $${bill.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}

calculateBill('orange', 2500, 1.80);