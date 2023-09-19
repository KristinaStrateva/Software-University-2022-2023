function cinema(input) {
    let cinemaScreening = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let totalTicketsNumber = r * c;

    switch (cinemaScreening) {
        case "Premiere": console.log(`${(totalTicketsNumber * 12).toFixed(2)} leva`); break;
        case "Normal": console.log(`${(totalTicketsNumber * 7.5).toFixed(2)} leva`); break;
        case "Discount": console.log(`${(totalTicketsNumber * 5).toFixed(2)} leva`); break;
    }
}

cinema(["Discount", "12", "30"]);