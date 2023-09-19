function pickyParticles(input) {
    let particlesAmount = Number(input.shift());
    let protonsIndexes = [];
    let electronsIndexes = [];
    // let result = [];

    for (let i = 0; i < particlesAmount; i++) {
        protonsIndexes.push(i);
        electronsIndexes.push(i);
    }

    let protonsMatrix = initialMatrix(input, particlesAmount);
    let electronsMatrix = initialMatrix(input, particlesAmount);

    for (let i = 0; i < particlesAmount; i++) {

        for (let j = 0; j < particlesAmount; j++) {
            let currResult = `${protonsIndexes[0]} <-> `;

            if (!electronsIndexes.includes(protonsMatrix[i][j])) {
                continue;
            } else {
                currResult += `${protonsMatrix[i][j]}`;
                electronsIndexes.splice(protonsMatrix[i][j], 1);
                protonsIndexes.shift();

                console.log(currResult);
            }
        }
    }

    function initialMatrix(arr, amount) {
        let result = [];

        for (let i = 0; i < amount; i++) {
            let currRow = arr
                .shift()
                .split(' ')
                .map(Number);

            result.push(currRow);
        }

        return result;
    }
}

pickyParticles([
    '8',
    '4 6 0 1 5 7 3 2',
    '1 2 6 4 3 0 7 5',
    '7 4 0 3 5 1 2 6',
    '2 1 6 3 0 5 7 4',
    '6 1 4 0 2 5 7 3',
    '0 5 6 4 7 3 1 2',
    '1 4 6 5 2 3 7 0',
    '2 7 3 4 6 1 5 0',
    '4 2 6 5 0 1 7 3',
    '7 5 2 4 6 1 0 3',
    '0 4 5 1 3 7 6 2',
    '7 6 2 1 3 0 4 5',
    '5 3 6 2 7 0 1 4',
    '1 7 4 3 5 2 6 0',
    '6 4 1 0 7 5 3 2',
    '6 3 0 4 1 2 5 7',
    '',
]);