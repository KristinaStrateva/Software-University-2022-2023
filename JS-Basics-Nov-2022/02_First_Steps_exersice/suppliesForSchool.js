function suppliesForSchool(input) {
    let pencilsPackCount = Number(input[0]);
    let markersPackCount = Number(input[1]);
    let litersCleaningDetergent = Number(input[2]);
    let percentDiscount = Number(input[3] /100);

    let pricePerPencilPack = Number(5.80);
    let pricePerMarkerPack = Number(7.20);
    let pricePerLiterCleaningDetergent = Number(1.20);

    let totalPencilsPackPrice = pricePerPencilPack * pencilsPackCount;
    let totalMarkersPackPrice = pricePerMarkerPack * markersPackCount;
    let totalLitersCleaningDetergentPrice = pricePerLiterCleaningDetergent * litersCleaningDetergent;

    let priceForSupplies = totalPencilsPackPrice + totalMarkersPackPrice + totalLitersCleaningDetergentPrice;

    let totalBillPrice = priceForSupplies - (priceForSupplies * percentDiscount);
    console.log(totalBillPrice);
}

suppliesForSchool(["4", "2", "5", "13"]);