function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": price = Number(0.5); break;
                case "water": price = Number(0.8); break;
                case "beer": price = Number(1.2); break;
                case "sweets": price = Number(1.45); break;
                case "peanuts": price = Number(1.6); break;
            } break;
        case "Plovdiv":
            switch (product) {
                case "coffee": price = Number(0.4); break;
                case "water": price = Number(0.7); break;
                case "beer": price = Number(1.15); break;
                case "sweets": price = Number(1.3); break;
                case "peanuts": price = Number(1.50); break;
            } break;
        case "Varna":
            switch (product) {
                case "coffee": price = Number(0.45); break;
                case "water": price = Number(0.7); break;
                case "beer": price = Number(1.1); break;
                case "sweets": price = Number(1.35); break;
                case "peanuts": price = Number(1.55); break;
            } break;
    }

    let totalPrice = quantity * price;
    console.log(totalPrice);
}

smallShop(["coffee", "Varna", "2"]);