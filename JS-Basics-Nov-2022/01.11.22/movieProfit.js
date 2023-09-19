function movieProfit(input) {
    let movieName = input[0];
    let daysNumber = Number(input[1]);
    let ticketsNumber = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let PercentForTheCinema = Number(input[4] / 100);

    let totalSoldTickets = daysNumber * ticketsNumber;
    let totalTickestPrice = totalSoldTickets * ticketPrice;
    let CinemaProfit = (totalTickestPrice * PercentForTheCinema);

    let movieProfit = (totalTickestPrice - CinemaProfit).toFixed(2);
    console.log(`The profit from the movie ${movieName} is ${movieProfit} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"]);