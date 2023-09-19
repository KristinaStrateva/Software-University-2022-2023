function savingMoneyForWashingMachine(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let savedMoney = 0;
    let evenBirthdays = 0;
    let toyAmount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            evenBirthdays++;
            savedMoney += evenBirthdays * 10;
        } else {
            toyAmount++;
        }
    }

    let stallenMoneyFromBrother = evenBirthdays * 1;
    let soldToysPrice = toyAmount * toyPrice;
    let totalSavedMoney = savedMoney + soldToysPrice - stallenMoneyFromBrother;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

savingMoneyForWashingMachine(["21", "1570.98", "3"]);