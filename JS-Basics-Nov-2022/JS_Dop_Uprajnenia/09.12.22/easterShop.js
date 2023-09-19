function easterShop(input) {
    let index = 0;
    let beginningEggsAmount = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let eggsSold = 0;

    let isNotEnough = false;

    while (command !== "Close") {
        let eggsAfterCommand = Number(input[index]);
        index++;

        if (command === "Buy") {
            if (beginningEggsAmount < eggsAfterCommand) {
                isNotEnough = true;
    
            break;
            }

            beginningEggsAmount -= eggsAfterCommand;
            eggsSold += eggsAfterCommand;
        } else if (command === "Fill") {
            beginningEggsAmount += eggsAfterCommand;
        }

        command = input[index];
        index++;
    }

    if (isNotEnough) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${beginningEggsAmount}.`);
    } else {
        console.log("Store is closed!");
        console.log(`${eggsSold} eggs sold.`);
    }
}

easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"]);