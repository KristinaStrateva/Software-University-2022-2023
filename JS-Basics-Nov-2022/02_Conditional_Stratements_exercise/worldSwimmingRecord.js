function worldSwimmingRecord(input) {
    let theRecordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecFor1Meter = Number(input[2]);
    let addResistenceTimeInSec = Number(12.5);

    let slowingDownTimesAmount = Math.floor(distanceInMeters / 15);
    let addSlowingDownTime = slowingDownTimesAmount * addResistenceTimeInSec;

    let totalSwimmingTime = distanceInMeters * timeInSecFor1Meter + addSlowingDownTime;

    if (totalSwimmingTime < theRecordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totalSwimmingTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSwimmingTime - theRecordInSec).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);