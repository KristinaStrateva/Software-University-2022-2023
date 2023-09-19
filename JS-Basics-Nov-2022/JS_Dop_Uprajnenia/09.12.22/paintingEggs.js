function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let batchAmount = Number(input[2]);

    let price = 0;

    switch (eggsColor) {
        case "Red":
            switch (eggsSize) {
                case "Large": price = 16; break;
                case "Medium": price = 13; break;
                case "Small": price = 9; break;
            }
        break;
        case "Green":
            switch (eggsSize) {
                case "Large": price = 12; break;
                case "Medium": price = 9; break;
                case "Small": price = 8; break;
            }
        break;
        case "Yellow":
            switch (eggsSize) {
                case "Large": price = 9; break;
                case "Medium": price = 7; break;
                case "Small": price = 5; break;
            }
        break;
    }

    let totalProfit = batchAmount * price;

    let finalProfit = 0.65 * totalProfit;

    console.log(`${finalProfit.toFixed(2)} leva.`);
}

paintingEggs(["Medium", "Green", "5"]);