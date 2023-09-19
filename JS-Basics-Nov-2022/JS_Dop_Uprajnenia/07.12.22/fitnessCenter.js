function fitnessCenter(input) {
    let visitorsAmount = Number(input[0]);

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;
    
    for (let i = 1; i <= visitorsAmount; i++) {
        let action = input[i];

        switch (action) {
            case "Back": backCounter++; break;
            case "Chest": chestCounter++; break;
            case "Legs": legsCounter++; break;
            case "Abs": absCounter++; break;
            case "Protein shake": proteinShakeCounter++; break;
            case "Protein bar": proteinBarCounter++; break;
        }
    }

    let totalTrainings = backCounter + chestCounter + legsCounter + absCounter;
    let percentTrainings = (totalTrainings / visitorsAmount) * 100;

    let totalProteinBuyers = proteinShakeCounter + proteinBarCounter;
    let percentProteinBuyers = (totalProteinBuyers / visitorsAmount) * 100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);
    console.log(`${percentTrainings.toFixed(2)}% - work out`);
    console.log(`${percentProteinBuyers.toFixed(2)}% - protein`);
}

fitnessCenter(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"]);