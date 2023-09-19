function touristShop(input) {
    let budget = Number(input[0]);

    let boughtProductsAmount = 0;
    let boughtProductsPrice = 0;

    for (let i = 1; i <= input.length - 1; i += 2) {
        let currentProductName = input[i];
        let currentProductPrice = Number(input[i + 1]);

        if (currentProductName === "Stop") {
            console.log(`You bought ${boughtProductsAmount} products for ${boughtProductsPrice.toFixed(2)} leva.`);
        return;
        } else if (currentProductName !== "Stop") {
            boughtProductsAmount++;
        }
        
        if (boughtProductsAmount % 3 === 0) {
            currentProductPrice /= 2;
        }

        boughtProductsPrice += currentProductPrice;

        budget -= currentProductPrice;

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${(Math.abs(budget)).toFixed(2)} leva!`);
        return;
        }
    }
}

touristShop(["94.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30", "Stop"]);