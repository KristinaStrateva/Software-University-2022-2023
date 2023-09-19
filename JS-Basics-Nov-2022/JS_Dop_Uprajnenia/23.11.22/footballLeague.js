function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let totalFansAmount = Number(input[1]);

    let sectorAFansAmount = 0;
    let sectorBFansAmount = 0;
    let sectorVFansAmount = 0;
    let sectorGFansAmount = 0;

    for (let i = 2; i <= totalFansAmount + 1; i++) {
        let currentFanSector = input[i];

        if (currentFanSector === "A") {
            sectorAFansAmount++;
        } else if (currentFanSector === "B") {
            sectorBFansAmount++;
        } else if (currentFanSector === "V") {
            sectorVFansAmount++;
        } else if (currentFanSector === "G") {
            sectorGFansAmount++;
        }
    }

    let sectorAFansPercent = (sectorAFansAmount / totalFansAmount) * 100;
    let sectorBFansPercent = (sectorBFansAmount / totalFansAmount) * 100;
    let sectorVFansPercent = (sectorVFansAmount / totalFansAmount) * 100;
    let sectorGFansPercent = (sectorGFansAmount / totalFansAmount) * 100;
    let totalFansPercent = (totalFansAmount / stadiumCapacity) * 100;

    console.log(`${sectorAFansPercent.toFixed(2)}%`);
    console.log(`${sectorBFansPercent.toFixed(2)}%`);
    console.log(`${sectorVFansPercent.toFixed(2)}%`);
    console.log(`${sectorGFansPercent.toFixed(2)}%`);
    console.log(`${totalFansPercent.toFixed(2)}%`);
}

footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);