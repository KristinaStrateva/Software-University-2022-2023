function truckDriver(input) {
    let season = input[0];
    let kilometersPerMonth = Number(input[1]);

    let pricePerKm = 0;

    if (kilometersPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            pricePerKm = 0.75;
        } else if (season === "Summer") {
            pricePerKm = 0.9;
        } else if (season === "Winter") {
            pricePerKm = 1.05;
        }
    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            pricePerKm = 0.95;
        } else if (season === "Summer") {
            pricePerKm = 1.1;
        } else if (season === "Winter") {
            pricePerKm = 1.25;
        }
    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        pricePerKm = 1.45;
    }

    let totalProfit = 0.9 * (kilometersPerMonth * pricePerKm * 4);
    console.log(totalProfit.toFixed(2)); 
}

truckDriver(["Winter", "4350"]);