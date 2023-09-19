function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let hallType = input[1];
    let soldTickets = Number(input[2]);

    if (movieName === "A Star Is Born") {
        if (hallType === "normal") {
            ticketPrice = Number(7.5);
        } else if (hallType === "luxury") {
            ticketPrice = Number(10.5);
        } else if (hallType === "ultra luxury") {
            ticketPrice = Number(13.5);
        }
    } else if (movieName === "Bohemian Rhapsody") {
        if (hallType === "normal") {
            ticketPrice = Number(7.35);
        } else if (hallType === "luxury") {
            ticketPrice = Number(9.45);
        } else if (hallType === "ultra luxury") {
            ticketPrice = Number(12.75);
        }
    } else if (movieName === "Green Book" ) {
        if (hallType === "normal") {
            ticketPrice = Number(8.15);
        } else if (hallType === "luxury") {
            ticketPrice = Number(10.25);
        } else if (hallType === "ultra luxury") {
            ticketPrice = Number(13.25);
        }
    } else if (movieName === "The Favourite") {
        if (hallType === "normal") {
            ticketPrice = Number(8.75);
        } else if (hallType === "luxury") {
            ticketPrice = Number(11.55);
        } else if (hallType === "ultra luxury") {
            ticketPrice = Number(13.95);
        }
    }

    let totalProfit = soldTickets * ticketPrice;
    console.log(`${movieName} -> ${totalProfit.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["The Favourite", "ultra luxury", "34"]);