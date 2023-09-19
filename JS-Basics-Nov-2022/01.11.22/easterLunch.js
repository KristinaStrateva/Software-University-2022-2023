function easterLunch(input) {
    let easterCakeAmount = Number(input[0]);
    let eggBoxesAmount = Number(input[1]);
    let cookiesAmountInKg = Number(input[2]);
    let pricePerEasterCake = Number(3.20);
    let pricePerEggBox = Number(4.35);
    let pricePerKgOfCookies = Number(5.40);
    let priceOfEggPaintForOneEgg = Number(0.15);
    let totalEggsAmount = eggBoxesAmount * Number(12);

    let totalEggPaintPrice = totalEggsAmount * priceOfEggPaintForOneEgg;
    let totalEasterCakePrice = easterCakeAmount * pricePerEasterCake;
    let totalEggBoxesPrice = eggBoxesAmount * pricePerEggBox;
    let totalCookiesPrice = cookiesAmountInKg * pricePerKgOfCookies;

    let totalPrice = (totalEasterCakePrice + totalEggBoxesPrice + totalCookiesPrice + totalEggPaintPrice).toFixed(2);
    console.log(totalPrice);
}

easterLunch(["2", "3", "2"]);