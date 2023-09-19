function basketballEquipment(input) {
    let annualBasketballTrainingPrice = Number(input[0]);

    let basketballShoes = annualBasketballTrainingPrice - (annualBasketballTrainingPrice * Number(0.4));
    let basketballSuit = basketballShoes - (basketballShoes * Number(0.2));
    let basketballBall = basketballSuit / Number(4);
    let basketballAccessories = basketballBall / Number(5);

    let totalBasketballPrice = annualBasketballTrainingPrice + basketballShoes + basketballSuit + basketballBall + basketballAccessories;
    console.log(totalBasketballPrice);

}

basketballEquipment(["550"]);