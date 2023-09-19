function repainting(input) {
    let nylonAmountNeeded = Number(input[0]);
    let paintAmountNeeded = Number(input[1]);
    let paintThinnerAmountNeeded = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let nylonPricePerSqrtM = Number(1.50);
    let paintPricePerLiter = Number(14.50);
    let paintThinnerPricePerLiter = Number(5.00);
    let bagsPrice = Number(0.40);

    let totalPaintAmountNeeded = paintAmountNeeded + (paintAmountNeeded * 0.1);
    let totalPaintAmountNeededPrice = totalPaintAmountNeeded * paintPricePerLiter;

    let totalNylonAmountNeededPrice = (nylonAmountNeeded + 2) * nylonPricePerSqrtM;

    let totalPaintThinnerAmountNeededPrice = paintThinnerAmountNeeded * paintThinnerPricePerLiter;

    let totalSuppliesPrice = totalPaintAmountNeededPrice + totalNylonAmountNeededPrice + totalPaintThinnerAmountNeededPrice + bagsPrice;

    let paintersPricePerHour = totalSuppliesPrice * Number(0.3);
    let totalPaintersPrice = paintersPricePerHour * hoursNeeded;

    let repaintingPrice = totalSuppliesPrice + totalPaintersPrice;
    console.log(repaintingPrice);

    }

repainting(["10", "11", "4", "8"]);