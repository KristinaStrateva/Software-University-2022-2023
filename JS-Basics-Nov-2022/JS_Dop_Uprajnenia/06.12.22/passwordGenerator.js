function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);

    let finalResult = ``;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = "a".charCodeAt(); k <= "a".charCodeAt() + l - 1; k++) {
                for (let m = "a".charCodeAt(); m <= "a".charCodeAt() + l - 1; m++) {
                    for (let o = 1; o <= n; o++) {
                        if (o > i && o > j) {
                            let result = `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${o} `;

                            finalResult += result;
                        } else {
                        continue;
                        }
                    }
                }
            }
        }
    }

    console.log(finalResult);
}

passwordGenerator(["3", "1"]);