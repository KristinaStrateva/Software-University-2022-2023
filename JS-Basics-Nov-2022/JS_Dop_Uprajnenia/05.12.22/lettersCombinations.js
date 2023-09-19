function lettersCombinations(input) {
    let firstLetter = input[0].charCodeAt();
    let lastLetter = input[1].charCodeAt();
    let exeptionalLetter = input[2].charCodeAt();

    let result = "";
    let fianlResult = ``;
    let counter = 0;

    for (let letter1 = firstLetter; letter1 <= lastLetter; letter1++) {
        if (letter1 === exeptionalLetter) {
            continue;
        }

        for (let letter2 = firstLetter; letter2 <= lastLetter; letter2++) {
            if (letter2 === exeptionalLetter) {
                continue;
            }

            for (let letter3 = firstLetter; letter3 <= lastLetter; letter3++) {
                if (letter3 === exeptionalLetter) {
                    continue;
                }
                
                result = String.fromCharCode(letter1) + String.fromCharCode(letter2) + String.fromCharCode(letter3);
                fianlResult += `${result} `;
                counter++;
            }
        }
    }

    console.log(`${fianlResult}${counter}`);
}

lettersCombinations(["a", "c", "b"]);