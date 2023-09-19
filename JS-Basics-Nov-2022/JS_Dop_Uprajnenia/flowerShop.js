function flowerShop(input) {
    let magnoliasAmount = Number(input[0]);
    let hyacinthsAmount = Number(input[1]);
    let rosesAmount = Number(input[2]);
    let cactusesAmount = Number(input[3]);
    let giftPrice = Number(input[4]);

    magnoliaPrice = Number(3.25);
    hyacinithPrice = Number(4);
    rosePrice = Number(3.50);
    cactusPrice = Number(8);

    let totalMagnoliaProfit = magnoliasAmount * magnoliaPrice;
    let totalHyacinithProfit = hyacinthsAmount * hyacinithPrice;
    let totalRoseProfit = rosesAmount * rosePrice;
    let totalCactusProfit = cactusesAmount * cactusPrice;

    let totalProfit = totalMagnoliaProfit + totalHyacinithProfit + totalRoseProfit + totalCactusProfit;
    let finalProfit = (95 / 100) * totalProfit;

    if (finalProfit >= giftPrice) {
        console.log(`She is left with ${Math.floor(finalProfit - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - finalProfit)} leva.`);
    }
}

flowerShop(["15", "7", "5", "10", "100"]);