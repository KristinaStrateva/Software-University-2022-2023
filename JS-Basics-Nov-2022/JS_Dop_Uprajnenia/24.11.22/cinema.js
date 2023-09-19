function cinema(input) {
    let cinemaHallCapacity = Number(input[0]);

    let ticketPrice = 5;
    let totalProfit = 0;

    for (let i = 1; i <= input.length - 1; i++) {
        let currentPeopleAmount = input[i];
        let currentProfit = 0;

        if (currentPeopleAmount !== "Movie time!") {
            currentPeopleAmount = Number(input[i]);
            
            if (currentPeopleAmount % 3 === 0) {
                currentProfit = currentPeopleAmount * ticketPrice - 5;
            } else {
                currentProfit = currentPeopleAmount * ticketPrice;
            }

            if (currentPeopleAmount > cinemaHallCapacity) {
                console.log("The cinema is full.");
            break;
            }
        } else if (currentPeopleAmount === "Movie time!" || cinemaHallCapacity === 0) {
            console.log(`There are ${cinemaHallCapacity} seats left in the cinema.`);
        break;
        } 

        cinemaHallCapacity -= currentPeopleAmount;
        totalProfit += currentProfit;
    }

    console.log(`Cinema income - ${totalProfit} lv.`);
}

cinema(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])
;