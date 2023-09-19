function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let counter = 0;
    let studentSeatsAmount = 0;
    let standardSeatsAmount = 0;
    let kidsSeatsAmount = 0;

    while (movieName !== "Finish") {
        let currentMaxSeatsAmount = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;

        let currentSeatsAmount = 0;
        let percentFullCinema = 0;

        while (ticketType !== "End") {
            counter++;

            if (ticketType === "student") {
                studentSeatsAmount++;
                currentSeatsAmount++;
            } else if (ticketType === "standard") {
                standardSeatsAmount++;
                currentSeatsAmount++;
            } else if (ticketType === "kid") {
                kidsSeatsAmount++;
                currentSeatsAmount++;
            }
    
            if (currentSeatsAmount === currentMaxSeatsAmount) {
            break;
            }

            ticketType = input[index];
            index++;
        }

        percentFullCinema = (currentSeatsAmount / currentMaxSeatsAmount) * 100;

        console.log(`${movieName} - ${percentFullCinema.toFixed(2)}% full.`);

        movieName = input[index];
        index++;
    }

    let percentStudentSeats = (studentSeatsAmount / counter) * 100;
    let percentStandardSeats = (standardSeatsAmount / counter) * 100;
    let percentKidsSeats = (kidsSeatsAmount / counter) * 100;

    console.log(`Total tickets: ${counter}`);
    console.log(`${percentStudentSeats.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardSeats.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsSeats.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);