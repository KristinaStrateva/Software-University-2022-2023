function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let studentTicketsAmount = 0;
    let standartTicketsAmount = 0;
    let kidTicketsAmount = 0;
    let ticketsAmount = 0;

    let totalStudentTicketsAmount = 0;
    let totalStandartTicketsAmount = 0;
    let totalKidTicketsAmount = 0;
    let totalTicketsAmount = 0;

    while (movieName !== "Finish") {
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;

        let isFull = false;

        while (ticketType !== "End") {
            if (ticketType === "student") {
                studentTicketsAmount++;
                ticketsAmount++;
            } else if (ticketType === "standard") {
                standartTicketsAmount++;
                ticketsAmount++;
            } else if (ticketType === "kid") {
                kidTicketsAmount++;
                ticketsAmount++;
            }

            if (ticketsAmount >= freeSeats) {
                isFull = true;
            break;
            }

            ticketType = input[index];
            index++;
        }

        if (isFull) {
            console.log(`${movieName} - 100.00% full.`);

        } else if (ticketType === "End") {
            let percentFullness = (ticketsAmount / freeSeats) * 100;
            console.log(`${movieName} - ${percentFullness.toFixed(2)}% full.`);
        }

        totalStudentTicketsAmount += studentTicketsAmount;
        totalStandartTicketsAmount += standartTicketsAmount;
        totalKidTicketsAmount += kidTicketsAmount;
        totalTicketsAmount += ticketsAmount;

        studentTicketsAmount = 0;
        standartTicketsAmount = 0;
        kidTicketsAmount = 0;
        ticketsAmount = 0;

        movieName = input[index];
        index++;
    }

    let percentStudentsTickets = (totalStudentTicketsAmount / totalTicketsAmount) * 100;
    let percentStandartTickets = (totalStandartTicketsAmount / totalTicketsAmount) * 100;
    let percentKidsTickets = (totalKidTicketsAmount / totalTicketsAmount) * 100;

    console.log(`Total tickets: ${totalTicketsAmount}`);
    console.log(`${percentStudentsTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidsTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);