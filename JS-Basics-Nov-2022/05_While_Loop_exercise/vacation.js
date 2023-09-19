function vacation(input) {
    let index = 0;
    let moneyForVacation = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;
    let actionType = input[index];
    index++;
    let moneySpendOrSaved = Number(input[index]);
    index++;
    let spendDays = 0;
    let totalDaysAmount = 0;

    while (moneyAvailable < moneyForVacation) {
        if (actionType === "spend") {            
            totalDaysAmount++;
            if (moneySpendOrSaved > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= moneySpendOrSaved;
            }

            spendDays++;

        } else if (actionType === "save") {
            totalDaysAmount++;
            moneyAvailable += moneySpendOrSaved;
            spendDays = 0;
        }

        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDaysAmount}`);
        return;
        }

        actionType = input[index];
        index++
        moneySpendOrSaved = Number(input[index]);
        index++;
    }

    console.log(`You saved the money for ${totalDaysAmount} days.`);
}

vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"]);