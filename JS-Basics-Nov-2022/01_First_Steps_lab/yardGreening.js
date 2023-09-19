function yardGreening(input) {
    let yardArea = Number(input[0]);
    let priceForOneSqrtM = Number(7.61);

    let priceForArea = yardArea * priceForOneSqrtM;
    let discount = priceForArea * Number(0.18);

    let finalPrice = priceForArea - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["491.65"]);