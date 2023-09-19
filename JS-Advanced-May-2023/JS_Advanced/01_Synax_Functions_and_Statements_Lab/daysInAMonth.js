function daysInAMonth(month, year) {
    let result = new Date(year, month, 0).getDate();

    console.log(result);
}

daysInAMonth(2, 2020);