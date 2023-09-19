function theSongOfTheWheels(input) {
    let m = Number(input[0]);

    let counter = 0;
    let totalResult = ``;
    let password = ``;

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    
                    if ((i * j) + (k * l) === m && i < j && k > l) {
                        counter++;

                        let result = `${i}${j}${k}${l} `;
                        totalResult += result;

                        if (counter === 4) {
                            password = result;
                        }
                    }
                }
            }
        }
    }

    if (counter >= 4) {
        console.log(totalResult);
        console.log(`Password: ${password}`);
    } else {
        if (counter > 0) {
            console.log(totalResult);
            console.log("No!");
        } else {
            console.log("No!");
        }
    }
}

theSongOfTheWheels(["110"]);