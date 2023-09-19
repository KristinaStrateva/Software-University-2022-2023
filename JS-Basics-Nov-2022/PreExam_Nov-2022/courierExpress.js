function courierExpress(input) {
    let parcelWeight = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;
    let pricePerKmFee = 0;
    let totalPriceFeeInLv = 0;

    if (serviceType === "standard" || serviceType === "express") {
        if (parcelWeight < 1) {
            pricePerKm = 3;
        } else if (parcelWeight < 10) {
            pricePerKm = 5;
        } else if (parcelWeight < 40) {
            pricePerKm = 10;
        } else if (parcelWeight < 90) {
            pricePerKm = 15;
        } else if (parcelWeight < 150) {
            pricePerKm = 20;
        }
    
        if (serviceType === "express") {
            if (parcelWeight < 1) {
                pricePerKmFee = 3 * 0.8;
            } else if (parcelWeight < 10) {
                pricePerKmFee = 5 * 0.4;
            } else if (parcelWeight < 40) {
                pricePerKmFee = 10 * 0.05;
            } else if (parcelWeight < 90) {
                pricePerKmFee = 15 * 0.02;
            } else if (parcelWeight < 150) {
                pricePerKmFee = 20 * 0.01;
            }

            totalPriceFeeInLv = ((parcelWeight * pricePerKmFee) / 100) * distance;
        }
    }

    let totalPriceInLv = (distance * pricePerKm) / 100;
    let finalPrice = totalPriceInLv + totalPriceFeeInLv;

    console.log(`The delivery of your shipment with weight of ${parcelWeight.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);
}

courierExpress(["87",
    "express",
    "130"]);