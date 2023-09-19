function townPopulation(input) {
    let townsInfo = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');

        if (!townsInfo[town]) {
            townsInfo[town] = 0;
        }

        townsInfo[town] += Number(population);
    }

    for (const town in townsInfo) {
        console.log(`${town} : ${townsInfo[town]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
]);