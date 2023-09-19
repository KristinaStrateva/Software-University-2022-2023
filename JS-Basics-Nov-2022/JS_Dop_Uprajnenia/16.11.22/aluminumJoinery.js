function aluminumJoinery(input) {
    let aluminumJoineryAmount = Number(input[0]);
    let type = input[1];
    let ifDelivery = input[2];

    let deliveryPrice = 0;
    let aluminumJoineryPrice = 0;
    let totalPrice = 0;

    switch (ifDelivery) {
        case "With delivery":
            deliveryPrice = 60;
            switch (type) {
                case "90X130":
                    aluminumJoineryPrice = 110;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <=30) {
                        totalPrice = totalPrice + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 30 && aluminumJoineryAmount <= 60) {
                        totalPrice = (0.95 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 60 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.92 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.92 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "100X150":
                    aluminumJoineryPrice = 140;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <=40) {
                        totalPrice = totalPrice + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 40 && aluminumJoineryAmount <= 80) {
                        totalPrice = (0.94 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 80 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.9 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.9 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "130X180":
                    aluminumJoineryPrice = 190;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <= 20) {
                        totalPrice = totalPrice + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 20 && aluminumJoineryAmount <= 50) {
                        totalPrice = (0.93 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 50 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.88 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.88 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "200X300":
                    aluminumJoineryPrice = 250;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <= 25) {
                        totalPrice = totalPrice + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 25 && aluminumJoineryAmount <= 50) {
                        totalPrice = (0.91 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 50 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.86 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.86 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
            }
            break;

        case "Without delivery":
            deliveryPrice = deliveryPrice;
            switch (type) {
                case "90X130":
                    aluminumJoineryPrice = 110;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <=30) {
                        totalPrice = totalPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 30 && aluminumJoineryAmount <= 60) {
                        totalPrice = (0.95 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 60 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.92 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.92 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "100X150":
                    aluminumJoineryPrice = 140;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <=40) {
                        totalPrice = totalPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 40 && aluminumJoineryAmount <= 80) {
                        totalPrice = (0.94 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 80 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.9 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.9 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "130X180":
                    aluminumJoineryPrice = 190;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <= 20) {
                        totalPrice = totalPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 20 && aluminumJoineryAmount <= 50) {
                        totalPrice = (0.93 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 50 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.88 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.88 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
                case "200X300":
                    aluminumJoineryPrice = 250;
                    totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                    if (aluminumJoineryAmount >= 10 && aluminumJoineryAmount <= 25) {
                        totalPrice = totalPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 25 && aluminumJoineryAmount <= 50) {
                        totalPrice = (0.91 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 50 && aluminumJoineryAmount <= 99) {
                        totalPrice = (0.86 * totalPrice) + deliveryPrice;
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else if (aluminumJoineryAmount > 99) {
                        totalPrice = 0.96 * ((0.86 * totalPrice) + deliveryPrice);
                        console.log(`${totalPrice.toFixed(2)} BGN`);
                    } else {
                        console.log("Invalid order");
                    }
                    break;
            }
            break;
    }
}

aluminumJoinery(["2", "100X150", "With delivery"]);