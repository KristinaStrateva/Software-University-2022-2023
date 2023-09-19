function travelAgency(input) {
    let destination = input[0];
    let packType = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;
    let invalidCase = false;

    if (destination === "Bansko" || destination === "Borovets") {
        if (packType === "withEquipment") {
            pricePerDay = 100;
            if (vipDiscount === "yes") {
                pricePerDay = 0.9 * pricePerDay;
            }
        } else if (packType === "noEquipment") {
            pricePerDay = 80;
            if (vipDiscount === "yes") {
                pricePerDay = 0.95 * pricePerDay;
            }
        } else {
            invalidCase = true;
            console.log("Invalid input!");
        }
    } else if (destination === "Varna" || destination === "Burgas") {
        if (packType === "withBreakfast") {
            pricePerDay = 130;
            if (vipDiscount === "yes") {
                pricePerDay = 0.88 * pricePerDay;
            }
        } else if (packType === "noBreakfast") {
            pricePerDay = 100;
            if (vipDiscount === "yes") {
                pricePerDay = 0.93 * pricePerDay;
            }
        } else {
            invalidCase = true;
            console.log("Invalid input!");
        }
    } else {
        invalidCase = true;
        console.log("Invalid input!");
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

travelAgency(["Varna", "noEquipment", "no", "6"]);