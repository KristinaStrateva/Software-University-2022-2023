function toyProfit(input) {
    let tripPrice = Number(input[0]);
    let puzzleAmount = Number(input[1]);
    let talkingDollsAmount = Number(input[2]);
    let teddyBearsAmount = Number(input[3]);
    let minnionsAmount = Number(input[4]);
    let trucksAmount = Number(input[5]);

    let puzzlePrice = Number(2.6);
    let talkingDollPrice = Number(3);
    let teddyBearPrice = Number(4.1);
    let minnionsPrice = Number(8.2);
    let truckPrice = Number(2);

    let totalSoldToysAmount = puzzleAmount + talkingDollsAmount + teddyBearsAmount + minnionsAmount + trucksAmount;
    let profit = (puzzleAmount * puzzlePrice) + (talkingDollsAmount * talkingDollPrice) + (teddyBearsAmount * teddyBearPrice) + (minnionsAmount * minnionsPrice) + (trucksAmount * truckPrice);

    if (totalSoldToysAmount >= 50) {
        profit = profit - (profit * 0.25);
    }

    let totalProfit = (profit - (profit * 0.1));

    if (totalProfit >= tripPrice) {
        console.log(`Yes! ${(totalProfit - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalProfit).toFixed(2)} lv needed.`);
    }
}

toyProfit(["320", "8", "2", "5", "5", "1"]);