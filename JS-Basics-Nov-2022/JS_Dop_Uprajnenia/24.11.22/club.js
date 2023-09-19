function club(input) {
    let profitWanted = Number(input[0]);

    let totalProfit = 0;

    for (let i = 1; i <= input.length; i += 2) {
        let currentCoctailName = input[i];

        if (currentCoctailName === "Party!") {
            let moneyNeeded = profitWanted - totalProfit;
            console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
        break;
        }

        let currentCoctailAmount = Number(input[i + 1]);

        let currentCoctailPrice = currentCoctailName.length;
        let currentProfit = currentCoctailAmount * currentCoctailPrice;

        if (currentProfit % 2 !== 0) {
            currentProfit = 0.75 * currentProfit;
        }

        totalProfit += currentProfit;
        
        if (totalProfit >= profitWanted) {
            console.log("Target acquired.");
        break;
        }
    }

    console.log(`Club income - ${totalProfit.toFixed(2)} leva.`);
}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10", "Hot Chocolate", "2"])
;