function combinations(input) {
    let sum = Number(input[0]);

    let counter = 0;

    for (let x1 = 0; x1 <= sum; x1++) {
        for (let x2 = 0; x2 <= sum; x2++) {
            for (let x3 = 0; x3 <= sum; x3++) {
                if (x1 + x2 + x3 === sum) {
                    counter++;
                }
            }
        }
    }

    console.log(counter);
}

combinations(["5"]);