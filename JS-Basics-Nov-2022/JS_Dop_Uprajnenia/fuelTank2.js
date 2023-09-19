function fuelTank(input) {
    let fuel = input[0];
    let fuelRange = Number(input[1]);
    let clubCard = input[2];

    gasolinePricePerL = Number(2.22);
    dieselPricePerL = Number(2.33);
    gasPricePerL = Number(0.93);

    gasolineDiscountPerL = Number(0.18);
    dieselDiscountPerL = Number(0.12);
    gasDiscountPerL = Number(0.08);

    if (fuel === "Gasoline") {
        if (clubCard === "Yes") {
            if (fuelRange < 20) {
                console.log(`${((fuelRange * gasolinePricePerL) - (fuelRange * gasolineDiscountPerL)).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = (fuelRange * gasolinePricePerL) - (fuelRange * gasolineDiscountPerL);
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = (fuelRange * gasolinePricePerL) - (fuelRange * gasolineDiscountPerL);
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        } else if (clubCard === "No") {
            if (fuelRange < 20) {
                console.log(`${(fuelRange * gasolinePricePerL).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = fuelRange * gasolinePricePerL;
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = fuelRange * gasolinePricePerL;
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        }
    } else if (fuel === "Diesel") {
        if (clubCard === "Yes") {
            if (fuelRange < 20) {
                console.log(`${((fuelRange * dieselPricePerL) - (fuelRange * dieselDiscountPerL)).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = (fuelRange * dieselPricePerL) - (fuelRange * dieselDiscountPerL);
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = (fuelRange * dieselPricePerL) - (fuelRange * dieselDiscountPerL);
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        } else if (clubCard === "No") {
            if (fuelRange < 20) {
                console.log(`${(fuelRange * dieselPricePerL).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = fuelRange * dieselPricePerL;
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = fuelRange * dieselPricePerL;
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        }
    } else if (fuel === "Gas") {
        if (clubCard === "Yes") {
            if (fuelRange < 20) {
                console.log(`${((fuelRange * gasPricePerL) - (fuelRange * gasDiscountPerL)).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = (fuelRange * gasPricePerL) - (fuelRange * gasDiscountPerL);
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = (fuelRange * gasPricePerL) - (fuelRange * gasDiscountPerL);
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        } else if (clubCard === "No") {
            if (fuelRange < 20) {
                console.log(`${(fuelRange * gasPricePerL).toFixed(2)} lv.`);
            } else if (fuelRange > 25) {
                let price = fuelRange * gasPricePerL;
                let totalPrice = (90 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            } else {
                let price = fuelRange * gasPricePerL;
                let totalPrice = (92 / 100) * price;
                console.log(`${(totalPrice).toFixed(2)} lv.`);
            }
        }
    }
}

fuelTank(["Diesel", "26", "Yes"]);