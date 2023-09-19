function flowers(input) {
    let chrysanthemumsAmount = Number(input[0]);
    let rosesAmount = Number(input[1]);
    let tulipsAmount = Number(input[2]);
    let season = input[3];
    let ifHoliday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalPrice = 0;
    let totalAmount = chrysanthemumsAmount + rosesAmount + tulipsAmount;
    arrangePrice = 2;

    if (season === "Spring" || season === "Summer") {
        chrysanthemumsPrice = 2;
        rosesPrice = 4.1;
        tulipsPrice = 2.5;
        if (ifHoliday === "Y") {
            chrysanthemumsPrice = 1.15 * chrysanthemumsPrice;
            rosesPrice = 1.15 * rosesPrice;
            tulipsPrice = 1.15 * tulipsPrice;
        } else if (ifHoliday === "N") {
        }
        totalPrice = chrysanthemumsAmount * chrysanthemumsPrice + rosesAmount * rosesPrice + tulipsAmount * tulipsPrice;
    } else if (season === "Autumn" || season === "Winter") {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.5;
        tulipsPrice = 4.15;
        if (ifHoliday === "Y") {
            chrysanthemumsPrice = 1.15 * chrysanthemumsPrice;
            rosesPrice = 1.15 * rosesPrice;
            tulipsPrice = 1.15 * tulipsPrice;
        } else if (ifHoliday === "N") {
        }
        totalPrice = chrysanthemumsAmount * chrysanthemumsPrice + rosesAmount * rosesPrice + tulipsAmount * tulipsPrice;
    }

    if (season === "Spring" && tulipsAmount > 7) {
        totalPrice = 0.95 * totalPrice;
    } else if (season === "Winter" && rosesAmount >= 10) {
        totalPrice = 0.9 * totalPrice;
    }
    
    if ((season === "Spring" || season === "Summer" || season === "Autumn" || season === "Winter") && totalAmount > 20) {
        totalPrice = 0.8 * totalPrice;
    }

    console.log((totalPrice + arrangePrice).toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"]);