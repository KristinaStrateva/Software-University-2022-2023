function loadSuitcases(input) {
    let index = 0;
    let trunkVolume = input[index];
    index++;
    let suitcaseVolume = Number(input[index]);
    index++;
    
    let counter = 0;
    let loadedSuitcases = 0;
    
    while (suitcaseVolume !== "End") {
        trunkVolume = Number(trunkVolume);
        
        counter++;

        if (counter % 3 === 0) {
            suitcaseVolume *= 1.1;
        }

        if (trunkVolume < suitcaseVolume) {
            console.log("No more space!");
            console.log(`Statistic: ${loadedSuitcases} suitcases loaded.`);

        return;
        }

        trunkVolume -= suitcaseVolume;

        loadedSuitcases++;

        suitcaseVolume = input[index];
        index++;
    }

    console.log("Congratulations! All suitcases are loaded!");
    console.log(`Statistic: ${loadedSuitcases} suitcases loaded.`);
}

loadSuitcases([
    "700.5",
    "180",
    "340.6",
    "126",
    "220"
]);