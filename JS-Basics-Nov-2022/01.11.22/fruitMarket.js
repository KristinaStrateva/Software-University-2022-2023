function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / Number(2);
    let orangesPrice = raspberriesPrice - (raspberriesPrice * Number(0.4));
    let bananasPrice = raspberriesPrice - (raspberriesPrice * Number(0.8));

    let totalBill = (strawberriesQuantity * strawberriesPrice + bananasQuantity * bananasPrice + orangesQuantity * orangesPrice + raspberriesQuantity * raspberriesPrice).toFixed(2);
    console.log(totalBill);
}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);