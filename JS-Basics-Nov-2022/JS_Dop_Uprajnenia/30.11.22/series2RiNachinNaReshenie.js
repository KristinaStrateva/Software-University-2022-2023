function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let seriesAmount = Number(input[index]);
    index++;
    let seriesName = "";
    let seriesPrice = 0;

    let totalSeriesPrice = 0;

    for (let i = index; i <= seriesAmount * 2; i += 2) {
        seriesName = input[i];
        seriesPrice = Number(input[i + 1]);

        if (seriesName === "Thrones") {
            totalSeriesPrice += 0.5 * seriesPrice;
        } else if (seriesName === "Lucifer") {
            totalSeriesPrice += 0.6 * seriesPrice;
        } else if (seriesName === "Protector") {
            totalSeriesPrice += 0.7 * seriesPrice;
        } else if (seriesName === "TotalDrama") {
            totalSeriesPrice += 0.8 * seriesPrice;
        } else if (seriesName === "Area") {
            totalSeriesPrice += 0.9 * seriesPrice;
        } else {
            totalSeriesPrice += seriesPrice;
        }
    }

    if (budget >= totalSeriesPrice) {
        console.log(`You bought all the series and left with ${(budget - totalSeriesPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalSeriesPrice - budget).toFixed(2)} lv. more to buy the series!`);
    }
}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);