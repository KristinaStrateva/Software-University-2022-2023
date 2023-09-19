function skeleton(input) {
    let index = 0;
    let controlMins = Number(input[index]);
    index++;
    let controlSec = Number(input[index]);
    index++;
    let spoutLengthInM = Number(input[index]);
    index++;
    let secNeededFor100M = Number(input[index]);
    index++;

    let totalControlTime = controlMins * 60 + controlSec;

    let countOfHowManyTimesIs120M = spoutLengthInM / 120;
    let timeReducing = countOfHowManyTimesIs120M * 2.5;

    let totalTime = ((secNeededFor100M * spoutLengthInM) / 100) - timeReducing;

    if (totalTime <= totalControlTime) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(totalTime - totalControlTime).toFixed(3)} second slower.`);
    }
}

skeleton(["1", "20", "1546", "12"]);