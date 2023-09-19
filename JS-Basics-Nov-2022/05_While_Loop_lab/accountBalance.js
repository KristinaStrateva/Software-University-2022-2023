function accountBalance(input) {
    let totalMoney = 0;
    let deposite = input[0];
    let index = 1;

    while (deposite !== "NoMoreMoney") {
        let moneyToDeposite = Number(deposite);

        if (moneyToDeposite < 0) {
            console.log("Invalid operation!");
        break;
        }

        console.log(`Increase: ${moneyToDeposite.toFixed(2)}`);
        totalMoney += moneyToDeposite;

        deposite = input[index];
        index++;
    }

    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);