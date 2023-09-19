function previousDay(year, month, day) {
    let currDate = new Date(year, month - 1, day);

    currDate.setDate(currDate.getDate() - 1);

    console.log(`${currDate.getFullYear()}-${currDate.getMonth() + 1}-${currDate.getDate()}`);
}

previousDay(2016, 1, 1);