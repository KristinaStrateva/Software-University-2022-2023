function easterDecoration(input) {
    let index = 0;
    let clientsAmount = Number(input[index]);
    index++;

    let totalClientsBill = 0;

    for (let i = 1; i <= clientsAmount; i++) {
        let purchaseType = input[index];
        index++;

        let purchaseCounter = 0;
        let finalClientBill = 0;

        while (purchaseType !== "Finish") {
            if (purchaseType === "basket") {
                finalClientBill += 1.5;
            } else if (purchaseType === "wreath") {
                finalClientBill += 3.8;
            } else if (purchaseType === "chocolate bunny") {
                finalClientBill += 7;
            }

            purchaseCounter++;

            purchaseType = input[index];
            index++;
        }

        if (purchaseCounter % 2 === 0) {
            finalClientBill *= 0.8;
        }

        totalClientsBill += finalClientBill;

        console.log(`You purchased ${purchaseCounter} items for ${finalClientBill.toFixed(2)} leva.`);
    }

    let averageBillPerClient = totalClientsBill / clientsAmount;

    console.log(`Average bill per client is: ${averageBillPerClient.toFixed(2)} leva.`);
}

easterDecoration([
    "2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"
]);