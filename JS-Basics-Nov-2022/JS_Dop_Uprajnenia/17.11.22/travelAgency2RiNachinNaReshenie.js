function travelAgency(input) {
    let destination = input[0];
    let packType = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;
    let invalidCase = false;

    switch (destination) {
        case "Bansko":
        case "Borovets":
            switch (packType) {
                case "withEquipment":
                    pricePerDay = 100;
                    if (vipDiscount === "yes") {
                        pricePerDay = 0.9 * pricePerDay;
                    }
                break;
                case "noEquipment":
                    pricePerDay = 80;
                    if (vipDiscount === "yes") {
                        pricePerDay = 0.95 * pricePerDay;
                    }
                break;
                default:
                    invalidCase = true;
                    console.log("Invalid input!");
                break;
            }
        break;
        case "Varna":
        case "Burgas":
            switch (packType) {
                case "withBreakfast":
                    pricePerDay = 130;
                    if (vipDiscount === "yes") {
                        pricePerDay = 0.88 * pricePerDay;
                    }
                break;
                case "noBreakfast":
                    pricePerDay = 100;
                    if (vipDiscount === "yes") {
                        pricePerDay = 0.93 * pricePerDay;
                    }
                break;
                default:
                    invalidCase = true;
                    console.log("Invalid input!");
                break;
            }
        break;
        default:
            invalidCase = true;
            console.log("Invalid input!");
        break;
    }

    if (days > 7) {
        days = days - 1;
    }

    let totalPrice = days * pricePerDay;
  
    if (invalidCase === false) {
        if (days >= 1) {
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else {
            console.log("Days must be positive number!");
        }
    }
}

travelAgency(["Burgas", "noEquipment", "no", "7"]);