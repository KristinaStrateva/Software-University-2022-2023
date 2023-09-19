function newHouse(input) {
    let flower = input[0];
    let flowerNumber = Number(input[1]);
    let budget = Number(input[2]);

    let totalFlowerPrice = 0;

    switch (flower) {
        case "Roses":
            if (flowerNumber > 80) {
                totalFlowerPrice = 0.9 * (flowerNumber * 5);
            } else {
                totalFlowerPrice = flowerNumber * 5;
            } break;
        case "Dahlias":
            if (flowerNumber > 90) {
                totalFlowerPrice = 0.85 * (flowerNumber * 3.8);
            } else {
                totalFlowerPrice = flowerNumber * 3.8;
            } break;
        case "Tulips":
            if (flowerNumber > 80) {
                totalFlowerPrice = 0.85 * (flowerNumber * 2.8);
            } else {
                totalFlowerPrice = flowerNumber * 2.8;
            } break;
        case "Narcissus":
            if (flowerNumber < 120) {
                totalFlowerPrice = 1.15 * (flowerNumber * 3);
            } else {
                totalFlowerPrice = flowerNumber * 3;
            } break;
        case "Gladiolus":
            if (flowerNumber < 80) {
                totalFlowerPrice = 1.2 * (flowerNumber * 2.5);
            } else {
                totalFlowerPrice = flowerNumber * 2.5;
            } break;
    }

    if (budget >= totalFlowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flower} and ${(budget - totalFlowerPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalFlowerPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Gladiolus", "60", "160"]);