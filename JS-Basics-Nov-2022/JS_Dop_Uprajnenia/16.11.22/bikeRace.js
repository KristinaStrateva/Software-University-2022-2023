function bikeRace(input) {
    let juniorNumber = Number(input[0]);
    let seniorNumber = Number(input[1]);
    let traceType = input[2];

    let juniorFeePrice = 0;
    let seniorFeePrice = 0;
    let totalDonation = 0;
    let expenses = 0;

    switch (traceType) {
        case "trail":
            juniorFeePrice = 5.5;
            seniorFeePrice = 7;
            totalDonation = juniorNumber * juniorFeePrice + seniorNumber * seniorFeePrice;
            expenses = 0.05 * totalDonation;
            console.log(`${(totalDonation - expenses).toFixed(2)}`);
            break;
        case "downhill":
            juniorFeePrice = 12.25;
            seniorFeePrice = 13.75;
            totalDonation = juniorNumber * juniorFeePrice + seniorNumber * seniorFeePrice;
            expenses = 0.05 * totalDonation;
            console.log(`${(totalDonation - expenses).toFixed(2)}`);
            break;
        case "road":
            juniorFeePrice = 20;
            seniorFeePrice = 21.5;
            totalDonation = juniorNumber * juniorFeePrice + seniorNumber * seniorFeePrice;
            expenses = 0.05 * totalDonation;
            console.log(`${(totalDonation - expenses).toFixed(2)}`);
            break;
        case "cross-country":
            juniorFeePrice = 8;
            seniorFeePrice = 9.5;
            if ((juniorNumber + seniorNumber) >= 50) {
                totalDonation = 0.75 * (juniorNumber * juniorFeePrice + seniorNumber * seniorFeePrice);
                expenses = 0.05 * totalDonation;
                console.log(`${(totalDonation - expenses).toFixed(2)}`);
            } else {
                totalDonation = juniorNumber * juniorFeePrice + seniorNumber * seniorFeePrice;
                expenses = 0.05 * totalDonation;
                console.log(`${(totalDonation - expenses).toFixed(2)}`);
            }
            break;
    }
}

bikeRace(["3", "40", "road"]);