function trekkingMania(input) {
    let groupsAmount = Number(input[0]);

    let totalPeopleAmount = 0;
    let musallaGroup = 0;
    let montBlancGroup = 0;
    let kilimanjaroGroup = 0;
    let k1Group = 0;
    let everestGroup = 0;

    for (let i = 1; i <= groupsAmount; i++) {
        let peopleAmountInGroup = Number(input[i]);
        
        totalPeopleAmount += peopleAmountInGroup;

        if (peopleAmountInGroup < 6) {
            musallaGroup += peopleAmountInGroup;
        } else if (peopleAmountInGroup < 13) {
            montBlancGroup += peopleAmountInGroup;
        } else if (peopleAmountInGroup < 26) {
            kilimanjaroGroup += peopleAmountInGroup;
        } else if (peopleAmountInGroup < 41) {
            k1Group += peopleAmountInGroup;
        } else {
            everestGroup += peopleAmountInGroup;
        }
    }

    let musallaGroupPercent = (musallaGroup / totalPeopleAmount) * 100;
    let montBlancGroupPercent = (montBlancGroup / totalPeopleAmount) * 100;
    let kilimanjaroGroupPercent = (kilimanjaroGroup / totalPeopleAmount) * 100;
    let k1GroupPercent = (k1Group / totalPeopleAmount) * 100;
    let everestGroupPercent = (everestGroup / totalPeopleAmount) * 100;

    console.log(`${musallaGroupPercent.toFixed(2)}%`);
    console.log(`${montBlancGroupPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroGroupPercent.toFixed(2)}%`);
    console.log(`${k1GroupPercent.toFixed(2)}%`);
    console.log(`${everestGroupPercent.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);