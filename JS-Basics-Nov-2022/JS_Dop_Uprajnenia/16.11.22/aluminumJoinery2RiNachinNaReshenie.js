function aluminumJoinery(input) {
    let aluminumJoineryAmount = Number(input[0]);
    let type = input[1];
    let ifDelivery = input[2];

    let deliveryPrice = 0;
    let aluminumJoineryPrice = 0;
    let totalPrice = 0;

    if (aluminumJoineryAmount < 10) {
        console.log("Invalid order");
    } else {
        switch (type) {
            case "90X130":
                aluminumJoineryPrice = 110;
                totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                if (aluminumJoineryAmount > 60) {
                    totalPrice = 0.92 * totalPrice;
                } else if (aluminumJoineryAmount > 30) {
                    totalPrice = 0.95 * totalPrice;
                }
                break;
            case "100X150":
                aluminumJoineryPrice = 140;
                totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                if (aluminumJoineryAmount > 80) {
                    totalPrice = 0.9 * totalPrice;
                } else if (aluminumJoineryAmount > 40) {
                    totalPrice = 0.94 * totalPrice;
                }
                break;
            case "130X180":
                aluminumJoineryPrice = 190;
                totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                if (aluminumJoineryAmount > 50) {
                    totalPrice = 0.88 * totalPrice;
                } else if (aluminumJoineryAmount > 20) {
                    totalPrice = 0.93 * totalPrice;
                }
                break;
            case "200X300":
                aluminumJoineryPrice = 250;
                totalPrice = aluminumJoineryAmount * aluminumJoineryPrice;
                if (aluminumJoineryAmount > 50) {
                    totalPrice = 0.86 * totalPrice;
                } else if (aluminumJoineryAmount > 25) {
                    totalPrice = 0.91 * totalPrice;
                }
                break;
        }

        if (ifDelivery === "With delivery") {
            deliveryPrice = 60;
            totalPrice = totalPrice + deliveryPrice;
        } else if (ifDelivery === "Without delivery") {
        }
        if  (aluminumJoineryAmount > 99) {
            totalPrice = 0.96 * totalPrice;
        } else {
        }
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["105", "100X150", "With delivery"]);