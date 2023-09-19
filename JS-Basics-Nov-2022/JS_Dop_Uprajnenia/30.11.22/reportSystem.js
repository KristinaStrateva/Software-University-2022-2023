function reportSystem(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let currentMoney = input[index];
    index++;

    let paymentType = 0;
    let paymentCsAmount = 0;
    let paymentCcAmount = 0;
    let totalCsMoneyCollected = 0;
    let totalCcMoneyCollected = 0;

    while (currentMoney !== "End") {
        currentMoney = Number(currentMoney);
        paymentType++;

        if (paymentType % 2 !== 0) {
            if (currentMoney <= 100) {
                paymentCsAmount++;
                totalCsMoneyCollected += currentMoney;
                moneyNeeded -= currentMoney;
                console.log("Product sold!");
            } else {
                console.log("Error in transaction!");
            }
        } else {
            if (currentMoney < 10) {
                console.log("Error in transaction!");
            } else {
                paymentCcAmount++;
                totalCcMoneyCollected += currentMoney;
                moneyNeeded -= currentMoney;
                console.log("Product sold!");
            }
        }

        if (moneyNeeded <= 0) {
            let averageCs = totalCsMoneyCollected / paymentCsAmount;
            let averageCc = totalCcMoneyCollected / paymentCcAmount;
            console.log(`Average CS: ${averageCs.toFixed(2)}`);
            console.log(`Average CC: ${averageCc.toFixed(2)}`);
        return;
        }

        currentMoney = input[index];
        index++;
    }

    console.log("Failed to collect required money for charity.");
}

reportSystem(["600", "86", "150", "98", "227", "39"]);