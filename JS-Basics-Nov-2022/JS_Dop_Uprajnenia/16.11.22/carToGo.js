function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let classType = 0;
    let carType = 0;
    let carPrice = 0;

    if (budget <= 100) {
        classType = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = 0.35 * budget;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = 0.65 * budget;
        }
    } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = 0.45 * budget;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = 0.8 * budget;
        }
    } else if (budget > 500) {
        classType = "Luxury class";
        carType = "Jeep";
        carPrice = 0.9 * budget;
    }

    console.log(`${classType}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo(["450", "Winter"]);