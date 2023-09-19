function mountainRun(input) {
    let currentRecord = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timePerMeterInSec = Number(input[2]);

    addTimeFor50M = Number(30);

    let totalAddTime = Math.trunc(distanceInM / 50) * addTimeFor50M;
    let timeForTheDistance = distanceInM * timePerMeterInSec;

    let totalTime = timeForTheDistance + totalAddTime;

    if (totalTime < currentRecord) {
        console.log(`Yes! The new record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTime - currentRecord).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377", "389", "3"]);