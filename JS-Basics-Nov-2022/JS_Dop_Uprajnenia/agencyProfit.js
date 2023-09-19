function agencyProfit(input) {
    let airlineName = input[0];
    let adultTicketCount = Number(input[1]);
    let childTicketCount = Number(input[2]);
    let netAdultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let totalNetAdultTicketPrice = adultTicketCount * (netAdultTicketPrice + serviceFee);
    let netChildTicketPrice = netAdultTicketPrice - (netAdultTicketPrice * Number(0.7));
    let totalNetChildTicketPrice = childTicketCount * (netChildTicketPrice + serviceFee);

    let agencyProfit = ((totalNetAdultTicketPrice + totalNetChildTicketPrice) * Number(0.2)).toFixed(2);
    console.log(`The profit of your agency from ${airlineName} tickets is ${agencyProfit} lv.`);
}

agencyProfit(["WizzAir", "15", "5", "120", "40"]);