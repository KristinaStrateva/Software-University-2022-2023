function vacationBooksList(input) {
    let sheetsNumber = Number(input[0]);
    let sheetsPerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursPerDay = (sheetsNumber / sheetsPerHour) / days;
    console.log(hoursPerDay);
}

vacationBooksList(["432", "15", "4"]);