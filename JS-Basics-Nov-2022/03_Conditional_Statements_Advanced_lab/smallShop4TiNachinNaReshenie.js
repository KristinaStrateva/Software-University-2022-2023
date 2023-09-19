function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": console.log(quantity * 0.5); break;
                case "water": console.log(quantity * 0.8); break;
                case "beer": console.log(quantity * 1.2); break;
                case "sweets": console.log(quantity * 1.45); break;
                case "peanuts": console.log(quantity * 1.6); break;
            } break;
        case "Plovdiv":
            switch (product) {
                case "coffee": console.log(quantity * 0.4); break;
                case "water": console.log(quantity * 0.7); break;
                case "beer": console.log(quantity * 1.15); break;
                case "sweets": console.log(quantity * 1.3); break;
                case "peanuts": console.log(quantity * 1.5); break;
            } break;
        case "Varna":
            switch (product) {
                case "coffee": console.log(quantity * 0.45); break;
                case "water": console.log(quantity * 0.7); break;
                case "beer": console.log(quantity * 1.1); break;
                case "sweets": console.log(quantity * 1.35); break;
                case "peanuts": console.log(quantity * 1.55); break;
            } break;
    }
}

smallShop(["coffee", "Varna", "2"]);