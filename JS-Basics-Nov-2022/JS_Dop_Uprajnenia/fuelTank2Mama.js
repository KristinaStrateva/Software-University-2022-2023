function fuelTank2(input) {
    let fuelType = (input[0]);
    let fuelLiters = Number(input[1]);
    let clubCard = (input[2]);
    gasolinePricePerLiter = Number(2.22);
    dieselPricePerLiter = Number(2.33);
    gasPricePerLiter = Number(0.93);
    
 
    if (clubCard === "Yes") {
 
        let gasolineNewPrice = gasolinePricePerLiter - 0.18;
        let dieselNewPrice = dieselPricePerLiter - 0.12;
        let gasNewPrice = gasPricePerLiter - 0.08;
 
        if (fuelType === "Gasoline") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * gasolineNewPrice;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * gasolineNewPrice * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * gasolineNewPrice * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        } else if (fuelType === "Diesel") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * dieselNewPrice;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * dieselNewPrice * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * dieselNewPrice * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        } else if (fuelType === "Gas") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * gasNewPrice;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * gasNewPrice * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * gasNewPrice * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        }
    } else if (clubCard === "No") {
 
        if (fuelType === "Gasoline") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * gasolinePricePerLiter;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * gasolinePricePerLiter * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * gasolinePricePerLiter * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        } else if (fuelType === "Diesel") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * dieselPricePerLiter;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * dieselPricePerLiter * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * dieselPricePerLiter * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        } if (fuelType === "Gas") {
            if (fuelLiters < 20) {
                let fuelPrice = fuelLiters * gasPricePerLiter;
                console.log(`${(fuelPrice).toFixed(2)} lv.`);
            } else if (fuelLiters > 25) {
                let fuelPrice = fuelLiters * gasPricePerLiter * 0.90;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            } else {
                let fuelPrice = fuelLiters * gasPricePerLiter * 0.92;
                console.log(`${fuelPrice.toFixed(2)} lv.`);
            }
        }
    }
}

fuelTank2(["Gas","22","No"]);