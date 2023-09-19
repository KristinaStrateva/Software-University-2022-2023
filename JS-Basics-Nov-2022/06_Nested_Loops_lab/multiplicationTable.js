function multiplicationTable() {
    for (let number = 1; number <= 10; number++) {
        for (let multiplicator = 1; multiplicator <= 10; multiplicator++) {
            console.log(`${number} * ${multiplicator} = ${number * multiplicator}`);
        }
    }
}

multiplicationTable();