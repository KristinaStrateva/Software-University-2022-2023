function ticTacToe(input) {
    let dashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    let inputLength = input.length;
    let counter = 0;
    
    for (let i = 0; i < inputLength; i++) {
        let command = input[i].split(' ');
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);

        if (dashBoard[index1][index2]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        counter++;

        let playerSymbol = counter % 2 !== 0 ? 'X' : 'O';

        dashBoard[index1][index2] = playerSymbol;

        // check if there is a strike

        if (checkForStrike(dashBoard, playerSymbol)) {
            console.log(`Player ${playerSymbol} wins!`);

            return dashBoard.forEach(row => {
                console.log(row.join('\t'));
            });
        }

        // check if the dashboard is filled

        let isEmptySpace = false;

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (!dashBoard[row][col]) {
                    isEmptySpace = true;
                    break;
                }
            }

            if (isEmptySpace) {
                break;
            }
        }

        if (!isEmptySpace) {
            console.log('The game ended! Nobody wins :(');

            return dashBoard.forEach(row => {
                console.log(row.join('\t'));
            });
        }
    }

    function checkForStrike(arr, playerSymbol) {
        for (let j = 0; j < 3; j++) {

            // check the row for strike
            if (arr[j][0] === playerSymbol &&
                arr[j][1] === playerSymbol &&
                arr[j][2] === playerSymbol
            ) {
                return true;

                // check the column for strike
            } else if (arr[0][j] === playerSymbol &&
                arr[1][j] === playerSymbol &&
                arr[2][j] === playerSymbol
            ) {
                return true;

                // check the right diagonal for strike
            } else if (arr[0][2] === playerSymbol &&
                arr[1][1] === playerSymbol &&
                arr[2][0] === playerSymbol
            ) {
                return true;

                // check the left diagonal for strike
            } else if (arr[0][0] === playerSymbol &&
                arr[1][1] === playerSymbol &&
                arr[2][2] === playerSymbol
            ) {
                return true;
            }

            return false;
        }
    }
}

console.log(ticTacToe(["0 1",

    "0 0",

    "0 2",

    "2 0",

    "1 0",

    "1 2",

    "1 1",

    "2 1",

    "2 2",

    "0 0"]));