function challengeTheWedding(input) {
    let menAmount = Number(input[0]);
    let womenAmount = Number(input[1]);
    let maxTableAmount = Number(input[2]);

    let finalResult = ``;
    let counter = 0;

    for (let i = 1; i <= menAmount; i++) {
        for (let j = 1; j <= womenAmount; j++) {
            counter++;

            if (counter > maxTableAmount) {
                console.log(finalResult);
            return;
            }
            
            let result = `(${i} <-> ${j}) `;
            
            finalResult += result;
        }
    }

    console.log(finalResult);
}

challengeTheWedding(["3", "3", "6"]);