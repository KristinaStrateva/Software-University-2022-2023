function filmPremiere(input) {
    let premiereName = input[0];
    let packForMovie = input[1];
    let ticketAmount = Number(input[2]);

    let packForMoviePrice = 0;

    if (premiereName === "John Wick") {
        if (packForMovie === "Drink") {
            packForMoviePrice = 12;
        } else if (packForMovie === "Popcorn") {
            packForMoviePrice = 15;
        } else if (packForMovie === "Menu") {
            packForMoviePrice = 19;
        }
    } else if (premiereName === "Star Wars") {
        if (packForMovie === "Drink") {
            packForMoviePrice = 18;
        } else if (packForMovie === "Popcorn") {
            packForMoviePrice = 25;
        } else if (packForMovie === "Menu") {
            packForMoviePrice = 30;
        }
    } else if (premiereName === "Jumanji") {
        if (packForMovie === "Drink") {
            packForMoviePrice = 9;
        } else if (packForMovie === "Popcorn") {
            packForMoviePrice = 11;
        } else if (packForMovie === "Menu") {
            packForMoviePrice = 14;
        }
    }

    if (premiereName === "Star Wars" && ticketAmount >= 4) {
        if (packForMovie === "Drink") {
            packForMoviePrice = 0.7 * 18;
        } else if (packForMovie === "Popcorn") {
            packForMoviePrice = 0.7 * 25;
        } else if (packForMovie === "Menu") {
            packForMoviePrice = 0.7 * 30;
        }
    }

    if (premiereName === "Jumanji" && ticketAmount === 2) {
        if (packForMovie === "Drink") {
            packForMoviePrice = 0.85 * 9;
        } else if (packForMovie === "Popcorn") {
            packForMoviePrice = 0.85 * 11;
        } else if (packForMovie === "Menu") {
            packForMoviePrice = 0.85 * 14;
        }
    }

    let totalPrice = ticketAmount * packForMoviePrice;
    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji", "Menu", "2"]);