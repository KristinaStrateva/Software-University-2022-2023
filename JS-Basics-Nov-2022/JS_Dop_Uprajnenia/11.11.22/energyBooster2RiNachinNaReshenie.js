function energyBooster(input) {
    let fruit = input[0];
    let setSize = input[1];
    let setsOrderedAmount = Number(input[2]);

    if (fruit === "Watermelon") {
        if (setSize === "small") {
            price = Number(2 * 56);
            totalPrice = setsOrderedAmount * price;
        } else if (setSize === "big") {
            price = Number(5 * 28.70);
            totalPrice = setsOrderedAmount * price;
        }

    } else if (fruit === "Mango") {
        if (setSize === "small") {
            price = Number(2 * 36.66);
            totalPrice = setsOrderedAmount * price;
        } else if (setSize === "big") {
            price = Number(5 * 19.60);
            totalPrice = setsOrderedAmount * price;
        }

    } else if (fruit === "Pineapple") {
        if (setSize === "small") {
            price = Number(2 * 42.10);
            totalPrice = setsOrderedAmount * price;
        } else if (setSize === "big") {
            price = Number(5 * 24.80);
            totalPrice = setsOrderedAmount * price;
        }

    } else if (fruit === "Raspberry") {
        if (setSize === "small") {
            price = Number(2 * 20);
            totalPrice = setsOrderedAmount * price;
        } else if (setSize === "big") {
            price = Number(5 * 15.20);
            totalPrice = setsOrderedAmount * price;
        }
    }    
    
    if (totalPrice > 1000) {
        finalPrice = 0.5 * totalPrice;
        console.log(`${(finalPrice).toFixed(2)} lv.`);
    } else if (totalPrice >= 400) {
        finalPrice = 0.85 * totalPrice;
        console.log(`${(finalPrice).toFixed(2)} lv.`);
    } else {
        finalPrice = totalPrice;
        console.log(`${(finalPrice).toFixed(2)} lv.`);
    }
}

energyBooster(["Pineapple", "small", "1"]);