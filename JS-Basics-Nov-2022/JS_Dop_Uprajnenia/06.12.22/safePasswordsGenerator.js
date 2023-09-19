function safePasswordsGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maximumGeneratedPasswords = Number(input[2]);

    let finalResult = ``;
    let counter = 0;
    let isMore = false;;

    for (let symbol1 = 35; symbol1 <= 55; symbol1++) {
        for (let symbol2 = 64; symbol2 <= 96; symbol2++) {
            for (let num1 = 1; num1 <= a; num1++) {
                for (let num2 = 1; num2 <= b; num2++) {
                    counter++;

                    let result = `${String.fromCharCode(symbol1)}${String.fromCharCode(symbol2)}${num1}${num2}${String.fromCharCode(symbol2)}${String.fromCharCode(symbol1)}`;

                    finalResult += `${result}|`;

                    if (counter >= maximumGeneratedPasswords) {
                        isMore = true;
                    break;
                    }

                    if (num1 === a && num2 === b) {
                        isMore = true;
                    break;
                    }

                    symbol1++;

                    if (symbol1 > 55) {
                        symbol1 = 35;
                    }

                    symbol2++;

                    if (symbol2 > 96) {
                        symbol2 = 64
                    }
                }

                if (isMore) {
                break;
                }
            }

            if (isMore) {
            break;
            }
        }

        if (isMore) {
        break;
        }
    }

    console.log(finalResult);
}

safePasswordsGenerator(["20", "50", "10"]);