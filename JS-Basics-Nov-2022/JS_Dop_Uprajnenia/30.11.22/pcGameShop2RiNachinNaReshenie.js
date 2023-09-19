function pcGameShop(input) {
    let index = 0;
    let soldGamesAmount = Number(input[index]);
    index++;
    let gamesNames = input[index];

    let hearthstoneAmount = 0;
    let forniteAmount = 0;
    let overwatchAmount = 0;
    let othersAmount = 0;

    let hearthstonePercent = 0;
    let fornitePercent = 0;
    let overwatchPercent = 0;
    let othersPercent = 0;

    while (index <= soldGamesAmount) {
        if (gamesNames === "Hearthstone") {
            hearthstoneAmount++;
            hearthstonePercent = (hearthstoneAmount / soldGamesAmount) * 100;
        } else if (gamesNames === "Fornite") {
            forniteAmount++;
            fornitePercent = (forniteAmount / soldGamesAmount) * 100;
        } else if (gamesNames === "Overwatch") {
            overwatchAmount++;
            overwatchPercent = (overwatchAmount / soldGamesAmount) * 100;
        }else {
            othersAmount++;
            othersPercent = (othersAmount / soldGamesAmount) * 100;
        }

        index++;
        gamesNames = input[index];
    }

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])
;