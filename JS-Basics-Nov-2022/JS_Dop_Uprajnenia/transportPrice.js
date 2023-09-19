function transportPrice(input) {
    let kilometers = Number(input[0]);
    let partOfTheDay = input[1];

    dayTaxiTariffPerKm = Number(0.79);
    let dayPrice = kilometers * dayTaxiTariffPerKm;
    nightTaxiTariffPerKm = Number(0.90);
    let nightPrice = kilometers * nightTaxiTariffPerKm;
    busTariffPerKm = Number(0.09);
    trainTariffPerKm = Number(0.06);

    if (kilometers >= 100) {
        console.log((kilometers * trainTariffPerKm).toFixed(2));
    } else if (kilometers >= 20) {
        console.log((kilometers * busTariffPerKm).toFixed(2));
    } else if (kilometers < 20) {
        if (partOfTheDay === "day") {
            console.log((dayPrice + 0.7).toFixed(2));
        } else if (partOfTheDay === "night") {
            console.log((nightPrice + 0.7).toFixed(2));
        }
    }
}

transportPrice(["180", "night"]);