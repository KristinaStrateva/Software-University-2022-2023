function addBag(input) {
    let bagPriceOver20Kg = Number(input[0]);
    let bagKg = Number(input[1]);
    let daysTillTrip = Number(input[2]);
    let bagsAmount = Number(input[3]);

    let bagPrice = 0;

    if (bagKg < 10) {
        bagPrice = 0.2 * bagPriceOver20Kg;
    } else if (bagKg >= 10 && bagKg <= 20) {
        bagPrice = 0.5 * bagPriceOver20Kg;
    } else {
        bagPrice = bagPriceOver20Kg;
    }

    if (daysTillTrip > 30) {
        bagPrice = 1.1 * bagPrice;
    } else if (daysTillTrip >= 7 && daysTillTrip <= 30) {
        bagPrice = 1.15 * bagPrice;
    } else if (daysTillTrip < 7) {
        bagPrice = 1.4 * bagPrice;
    }

    let totalBagPrice = bagsAmount * bagPrice;
    console.log(`The total price of bags is: ${totalBagPrice.toFixed(2)} lv. `);
}

addBag(["63.8", "23", "3","1"]);