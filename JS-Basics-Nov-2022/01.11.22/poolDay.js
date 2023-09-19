function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunbedPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEntranceFee = peopleCount * entranceFee;
    let totalUmbrellaPrice = Math.ceil(peopleCount * umbrellaPrice) / Number(2);
    let totalSunbedPrice = Math.ceil(peopleCount * Number(0.75)) * sunbedPrice;

    let totalPrice = (totalEntranceFee + totalUmbrellaPrice + totalSunbedPrice).toFixed(2);
    console.log(`${totalPrice} lv.`);
}

poolDay(["100", "8", "6", "4"]);