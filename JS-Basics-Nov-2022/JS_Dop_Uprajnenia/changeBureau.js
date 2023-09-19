function changeBureau(input) {
    let bitcoinAmount = Number(input[0]);
    let chineseYuanAmount = Number(input[1]);
    let comiss = Number(input[2]);

    bitcoinPriceInLv = Number(1168);
    chineseYuanInUsd = Number(0.15);
    dollarPriceInLv = Number(1.76);
    euroPriceInLv = Number(1.95);

    chineseYuanInLv = chineseYuanInUsd * dollarPriceInLv;

    totalLeva = (bitcoinAmount * bitcoinPriceInLv) + (chineseYuanAmount * chineseYuanInLv)
    eurosWithoutComiss = totalLeva / euroPriceInLv;

    eurosAfterComiss = eurosWithoutComiss - (eurosWithoutComiss * (comiss / 100));
    console.log((eurosAfterComiss).toFixed(2));
}

changeBureau(["7", "50200.12", "3"]);