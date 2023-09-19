function happyCatParking(input) {
    let daysAmount = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let totalParkingPricePerDay = 0;
    let totalParkingPrice = 0;

    for (let day = 1; day <= daysAmount; day++) {
        for (let hour = 1; hour <= hoursPerDay; hour++) {

            if (day % 2 === 0 && hour % 2 !== 0) {
                totalParkingPricePerDay += 2.5;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                totalParkingPricePerDay += 1.25;
            } else {
                totalParkingPricePerDay += 1;
            }
        }
            
        console.log(`Day: ${day} - ${totalParkingPricePerDay.toFixed(2)} leva`);

        totalParkingPrice += totalParkingPricePerDay;

        totalParkingPricePerDay = 0;
    }

    console.log(`Total: ${totalParkingPrice.toFixed(2)} leva`);
}

happyCatParking(["5", "2"]);