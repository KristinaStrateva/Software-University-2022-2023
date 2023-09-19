function energyBooster(input) {
    let fruit = input[0];
    let setSize = input[1];
    let setsOrderedAmount = Number(input[2]);

    if (fruit === "Watermelon") {
        if (setSize === "small") {
            let watermelonPrice = Number(2 * 56);
            let totalPrice = setsOrderedAmount * watermelonPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        } else if (setSize === "big") {
            let watermelonPrice = Number(5 * 28.70);
            let totalPrice = setsOrderedAmount * watermelonPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        }

    } else if (fruit === "Mango") {
        if (setSize === "small") {
            let mangoPrice = Number(2 * 36.66);
            let totalPrice = setsOrderedAmount * mangoPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        } else if (setSize === "big") {
            let mangoPrice = Number(5 * 19.60);
            let totalPrice = setsOrderedAmount * mangoPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        }

    } else if (fruit === "Pineapple") {
        if (setSize === "small") {
            let pineapplePrice = Number(2 * 42.10);
            let totalPrice = setsOrderedAmount * pineapplePrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        } else if (setSize === "big") {
            let pineapplePrice = Number(5 * 24.80);
            let totalPrice = setsOrderedAmount * pineapplePrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        }

    } else if (fruit === "Raspberry") {
        if (setSize === "small") {
            let raspberryPrice = Number(2 * 20);
            let totalPrice = setsOrderedAmount * raspberryPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        } else if (setSize === "big") {
            let raspberryPrice = Number(5 * 15.20);
            let totalPrice = setsOrderedAmount * raspberryPrice;
            if (totalPrice > 1000) {
                let finalPrice = 0.5 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else if (totalPrice >= 400) {
                let finalPrice = 0.85 * totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            } else {
                let finalPrice = totalPrice;
                console.log(`${(finalPrice).toFixed(2)} lv.`);
            }
        }
    }
}

energyBooster(["Mango", "big", "8"]);
