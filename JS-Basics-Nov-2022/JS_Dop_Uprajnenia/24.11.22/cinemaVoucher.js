function cinemaVoucher(input) {
    let voucherAmount = Number(input[0]);

    let letter1 = 0;
    let letter2 = 0;
    let price = 0;
    let ticketsAmount = 0;
    let othersAmount = 0;

    for (let i = 1; i <= input.length - 1; i++) {
        let currentPurchase = input[i];
        let currentPurchaseLength = currentPurchase.length;

        letter1 = currentPurchase.charCodeAt(0);
        letter2 = currentPurchase.charCodeAt(1);

        if (currentPurchase !== "End") {
            if (currentPurchaseLength > 8) {
                price = letter1 + letter2;
                
                if (price > voucherAmount) {
                    break;
                }

                ticketsAmount++;
            } else {
                price = letter1;

                if (price > voucherAmount) {
                    break;
                }

                othersAmount++;
            }           

            voucherAmount -= price;

        } else if (currentPurchase === "End") {
            break;
        }
    }

    console.log(ticketsAmount);
    console.log(othersAmount);
}

cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"]);