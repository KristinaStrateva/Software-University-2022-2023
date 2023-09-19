function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let piecesAmount = input[index];
    
    let cakeArea = width * length;
    let totalPiecesAmount = 0;

    while (piecesAmount !== "STOP") {
        piecesAmount = Number(input[index]);
        index++;

        totalPiecesAmount += piecesAmount;

        if (totalPiecesAmount > cakeArea) {
            let piecesNeeded = totalPiecesAmount - cakeArea;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
        return;
        } else if (totalPiecesAmount === cakeArea) {
            console.log(`${piecesAmount} pieces are left.`);
        return;
        }

        piecesAmount = input[index];
    }

    console.log(`${cakeArea - totalPiecesAmount} pieces are left.`);
}

cake(["10", "2", "2", "4", "6", "8"]);