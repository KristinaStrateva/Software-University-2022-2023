function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch (town) {
        case "Sofia":
            if (product === "coffee") {
                price = Number(0.5);
            } else if (product === "water") {
                price = Number(0.8);
            } else if (product === "beer") {
                price = Number(1.2);
            } else if (product === "sweets") {
                price = Number(1.45);
            } else if (product === "peanuts") {
                price = Number(1.6);
            } break;
        case "Plovdiv":
            if (product === "coffee") {
                price = Number(0.4);
            } else if (product === "water") {
                price = Number(0.7);
            } else if (product === "beer") {
                price = Number(1.15);
            } else if (product === "sweets") {
                price = Number(1.30);
            } else if (product === "peanuts") {
                price = Number(1.5);
            } break;
        case "Varna":
            if (product === "coffee") {
                price = Number(0.45);
            } else if (product === "water") {
                price = Number(0.7);
            } else if (product === "beer") {
                price = Number(1.1);
            } else if (product === "sweets") {
                price = Number(1.35);
            } else if (product === "peanuts") {
                price = Number(1.55);
            } break;
    }

    let totalPrice = quantity * price;
    console.log(totalPrice);
}

smallShop(["sweets", "Sofia", "2.23"]);