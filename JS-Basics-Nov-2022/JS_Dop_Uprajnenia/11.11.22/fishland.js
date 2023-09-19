function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselKg = Number(input[4]);

    let bonitoPrice = mackerelPrice + 0.6 * mackerelPrice;
    let safridPrice = spratPrice + 0.8 * spratPrice;
    musselPrice = Number(7.5);

    let totalPrice = bonitoKg * bonitoPrice + safridKg * safridPrice + musselKg * musselPrice;
    console.log((totalPrice).toFixed(2));
}

fishland(["7.79", "5.35", "9.3", "0", "0"]);