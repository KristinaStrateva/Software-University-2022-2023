function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let budget = input[index];
    index++;
    let savedMoney = input[index];
    index++;

    let totalSavedMoney = 0;

    while (savedMoney !== destination) {
        if (destination === "End") {
            return;
        }
        budget = Number(budget);
        savedMoney = Number(savedMoney);

        totalSavedMoney += savedMoney;

        if (totalSavedMoney >= budget) {
            console.log(`Going to ${destination}!`);

            totalSavedMoney = 0;

            destination = input[index];
            index++;
            budget = input[index];
            index++;
            savedMoney = input[index];
            index++;
        continue;
        }

        savedMoney = input[index];
        index++;
    }
}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);