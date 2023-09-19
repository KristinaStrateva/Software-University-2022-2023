function shopping(input) {
    let budget = Number(input[0]);
    let videoCardAmount = Number(input[1]);
    let processorAmount = Number(input[2]);
    let ramAmount = Number(input[3]);

    videoCardPrice = Number(250);
    let totalVideoCardPrice = videoCardPrice * videoCardAmount;
    
    processorPrice = (35 / 100) * totalVideoCardPrice;
    let totalProcessorPrice = processorPrice * processorAmount;

    ramPrice = (10 / 100) * totalVideoCardPrice;
    let totalRamPrice = ramPrice * ramAmount;

    let totalPrice = totalVideoCardPrice + totalProcessorPrice + totalRamPrice;

    if (videoCardAmount > processorAmount) {
        totalPrice = (85 / 100) * totalPrice;
    }

    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"]);