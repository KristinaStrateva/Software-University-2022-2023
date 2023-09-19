function excursion(input) {
    let peopleAmount = Number(input[0]);
    let nightsAmount = Number(input[1]);
    let transportCardsAmount = Number(input[2]);
    let museumTicketsAmount = Number(input[3]);

    let totalNightsPrice = (nightsAmount * 20) * peopleAmount;
    let totalTransportCardsPrice = (transportCardsAmount * 1.6) * peopleAmount;
    let totalMuseumTicketsPrice = (museumTicketsAmount * 6) * peopleAmount;

    let totalPrice = totalNightsPrice + totalTransportCardsPrice + totalMuseumTicketsPrice;
    let finalPrice = 1.25 * totalPrice;

    console.log(finalPrice.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"]);