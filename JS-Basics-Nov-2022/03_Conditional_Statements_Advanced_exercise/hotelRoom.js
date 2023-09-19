function hotelRoom(input) {
    let month = input[0];
    let nightsAmount = Number(input[1]);

    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;

    if (month === "May" || month === "October") {
        studioPricePerNight = 50;
        apartmentPricePerNight = 65;
        if (nightsAmount <= 7) {
            console.log(`Apartment: ${(nightsAmount * apartmentPricePerNight).toFixed(2)} lv.`);
            console.log(`Studio: ${(nightsAmount * studioPricePerNight).toFixed(2)} lv.`);
        } else if (nightsAmount > 7 && nightsAmount <= 14) {
            console.log(`Apartment: ${(nightsAmount * apartmentPricePerNight).toFixed(2)} lv.`);
            console.log(`Studio: ${(0.95 * (nightsAmount * studioPricePerNight)).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(0.9 * (nightsAmount * apartmentPricePerNight)).toFixed(2)} lv.`);
            console.log(`Studio: ${(0.7 * (nightsAmount * studioPricePerNight)).toFixed(2)} lv.`);
        }
    } else if (month === "June" || month === "September") {
        studioPricePerNight = 75.2;
        apartmentPricePerNight = 68.7;
        if (nightsAmount <= 14) {
            console.log(`Apartment: ${(nightsAmount * apartmentPricePerNight).toFixed(2)} lv.`);
            console.log(`Studio: ${(nightsAmount * studioPricePerNight).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(0.9 * (nightsAmount * apartmentPricePerNight)).toFixed(2)} lv.`);
            console.log(`Studio: ${(0.8 * (nightsAmount * studioPricePerNight)).toFixed(2)} lv.`);
        }
    } else if (month === "July" || month === "August") {
        studioPricePerNight = 76;
        apartmentPricePerNight = 77;
        if (nightsAmount <= 14) {
            console.log(`Apartment: ${(nightsAmount * apartmentPricePerNight).toFixed(2)} lv.`);
            console.log(`Studio: ${(nightsAmount * studioPricePerNight).toFixed(2)} lv.`);
        } else {
            console.log(`Apartment: ${(0.9 * (nightsAmount * apartmentPricePerNight)).toFixed(2)} lv.`);
            console.log(`Studio: ${(nightsAmount * studioPricePerNight).toFixed(2)} lv.`);
        }
    }
}

hotelRoom(["August", "20"]);