function foodDelivery(input) {
    let chikenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veggyMenuCount = Number(input[2]);

    let pricePerChickenMenu = Number(10.35);
    let pricePerFishMenu = Number(12.40);
    let pricePerVeggyMenu = Number(8.15);
    let delivery = Number(2.50);

    let totalChickenMenuPrice = chikenMenuCount * pricePerChickenMenu;
    let totalFishMenuPrice = fishMenuCount * pricePerFishMenu;
    let totalVeggyMenuPrice = veggyMenuCount * pricePerVeggyMenu;
    let dessertPrice = (totalChickenMenuPrice + totalFishMenuPrice + totalVeggyMenuPrice) * Number(0.2);

    let totalDeliveryPrice = totalChickenMenuPrice + totalFishMenuPrice + totalVeggyMenuPrice + dessertPrice + delivery;
    console.log(totalDeliveryPrice);
}

foodDelivery(["9", "2", "6"]);