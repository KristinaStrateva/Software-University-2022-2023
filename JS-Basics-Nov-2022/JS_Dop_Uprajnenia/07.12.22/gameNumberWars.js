function gameNumberWars(input) {
    let index = 0;
    let player1Name = input[index];
    index++;
    let player2Name = input[index];
    index++;
    let player1Card = input[index];
    index++;
    let player2Card = input[index];
    index++;

    let player1Points = 0;
    let player2Points = 0;
    let winnerName = "";
    let winnerPoints = 0;

    let isNumberWars = false;

    while (player1Card !== "End of game") {
        player1Card = Number(player1Card);
        player2Card = Number(player2Card);

        if (player1Card === player2Card) {
            isNumberWars = true;

            player1Card = input[index];
            index++;
            player2Card = input[index];
            index++;
        continue;
        }
        
        if (isNumberWars) {
            if (player1Card > player2Card) {
                winnerName = player1Name;
                winnerPoints = player1Points;
            } else if (player2Card > player1Card) {
                winnerName = player2Name;
                winnerPoints = player2Points;
            }

            console.log("Number wars!");
            console.log(`${winnerName} is winner with ${winnerPoints} points`);
            
        return;
        } else {
            if (player1Card > player2Card) {
                player1Points += player1Card - player2Card;
            } else if (player2Card > player1Card) {
                player2Points += player2Card - player1Card;
            }
        }
        
        isNumberWars = false;

        player1Card = input[index];
        index++;
        player2Card = input[index];
        index++;
    }

    if (player1Points > player2Points) {
        winnerName = player1Name;
        winnerPoints = player1Points;
    } else if (player2Points > player1Points) {
        winnerName = player2Name;
        winnerPoints = player2Points;
    }

    if (isNumberWars) {
        console.log("Number wars!");
        console.log(`${winnerName} is winner with ${winnerPoints} points`);
    } else {
        console.log(`${player1Name} has ${player1Points} points`);
        console.log(`${player2Name} has ${player2Points} points`);
    }
}

gameNumberWars(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"]);