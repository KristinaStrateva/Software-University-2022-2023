function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    if (town === "Sofia") {
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
        }
    } else if (town === "Plovdiv") {
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
        }
    } else if (town === "Varna") {
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
        }
    }

    let totalPrice = quantity * price;
    console.log(totalPrice);
}

smallShop(["coffee", "Varna", "2"]);