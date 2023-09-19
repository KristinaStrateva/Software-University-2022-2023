function coins(input) {
    let exchange = Number(input[0]);
    let convertedExchange = (exchange * 100).toFixed(2);
    let coinsAmount = 0;

    while (convertedExchange > 0) {
        if (convertedExchange >= 200) {
            convertedExchange -= 200;
        } else if (convertedExchange >= 100) {
            convertedExchange -= 100;
        } else if (convertedExchange >= 50) {
            convertedExchange -= 50;
        } else if (convertedExchange >= 20) {
            convertedExchange -= 20;
        } else if (convertedExchange >= 10) {
            convertedExchange -= 10;
        } else if (convertedExchange >= 5) {
            convertedExchange -= 5;
        } else if (convertedExchange >= 2) {
            convertedExchange -= 2;
        } else {
            convertedExchange -= 1;
        }

        coinsAmount++;
    }

    console.log(coinsAmount);
}

coins(["2.73"]);