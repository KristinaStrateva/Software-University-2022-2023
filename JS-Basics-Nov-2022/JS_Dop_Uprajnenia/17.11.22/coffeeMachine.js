function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinksAmount = Number(input[2]);

    let drinkPrice = 0;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": drinkPrice = 0.9; break;
                case "Normal": drinkPrice = 1; break;
                case "Extra": drinkPrice = 1.2; break;
            }
        break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": drinkPrice = 1; break;
                case "Normal": drinkPrice = 1.2; break;
                case "Extra": drinkPrice = 1.6; break;
            }
        break;
        case "Tea":
            switch (sugar) {
                case "Without": drinkPrice = 0.5; break;
                case "Normal": drinkPrice = 0.6; break;
                case "Extra": drinkPrice = 0.7; break;
            }
        break;
    }

    let totalPrice = drinksAmount * drinkPrice;

    if (sugar === "Without") {
        totalPrice = 0.65 * totalPrice;
    }

    if (drink === "Espresso" && drinksAmount >= 5) {
        totalPrice = 0.75 * totalPrice;
    }

    if (totalPrice > 15) {
        totalPrice = 0.8 * totalPrice;
    }

    console.log(`You bought ${drinksAmount} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Tea",
"Extra",
"3"])
;