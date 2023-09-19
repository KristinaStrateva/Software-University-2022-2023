function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsAmount = Number(input[2]);
    let nightsAmount = Number(input[3]);

    let nightPrice = 0;
    let sportType = 0;

    if (season === "Winter") {
        if (groupType === "boys"){
            nightPrice = 9.6;
            sportType = "Judo";
        } else if (groupType === "girls") {
            nightPrice = 9.6;
            sportType = "Gymnastics";
        } else if (groupType === "mixed") {
            nightPrice = 10;
            sportType = "Ski";
        }
    } else if (season === "Spring") {
        if (groupType === "boys"){
            nightPrice = 7.2;
            sportType = "Tennis";
        } else if (groupType === "girls") {
            nightPrice = 7.2;
            sportType = "Athletics";
        } else if (groupType === "mixed") {
            nightPrice = 9.5;
            sportType = "Cycling";
        }
    } else if (season === "Summer") {
        if (groupType === "boys"){
            nightPrice = 15;
            sportType = "Football";
        } else if (groupType === "girls") {
            nightPrice = 15;
            sportType = "Volleyball";
        } else if (groupType === "mixed") {
            nightPrice = 20;
            sportType = "Swimming";
        }
    }

    let totalPrice = nightsAmount * nightPrice * studentsAmount;
    let finalPrice = 0;

    if (studentsAmount >= 50) {
        finalPrice = 0.5 * totalPrice;
    } else if (studentsAmount >= 20 && studentsAmount < 50) {
        finalPrice = 0.85 * totalPrice;
    } else if (studentsAmount >= 10 && studentsAmount < 20) {
        finalPrice = 0.95 * totalPrice;
    } else {
        finalPrice = totalPrice;
    }

    console.log(`${sportType} ${finalPrice.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "mixed", "17", "14"]);