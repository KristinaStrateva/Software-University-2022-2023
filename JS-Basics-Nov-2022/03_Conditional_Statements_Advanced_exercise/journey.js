function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let journeyType = 0;
    let destination = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                journeyType = "Camp";
                spentMoney = 0.3 * budget;
                break;
            case "winter":
                journeyType = "Hotel";
                spentMoney = 0.7 * budget;
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                journeyType = "Camp";
                spentMoney = 0.4 * budget;
                break;
            case "winter":
                journeyType = "Hotel";
                spentMoney = 0.8 * budget;
                break;
        }
    } else {
        destination = "Europe";
        journeyType = "Hotel";
        switch (season) {
            case "summer":
            case "winter": spentMoney = 0.9 * budget;
                break;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${spentMoney.toFixed(2)}`);
}

journey(["1500", "summer"]);