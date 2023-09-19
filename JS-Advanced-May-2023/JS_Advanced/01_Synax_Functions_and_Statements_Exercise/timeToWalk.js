function timeToWalk(steps, lengthPerStep, speedInKmPerHour) {
    let totalLengthInM = steps * lengthPerStep;
    let speedInMPerSec = speedInKmPerHour / 3.6;
    let additionalMinutes = Math.trunc(totalLengthInM / 500);

    let timeNeededInSec = totalLengthInM / speedInMPerSec;

    let hour = Math.trunc(timeNeededInSec / 3600).toString().padStart(2, '0');

    timeNeededInSec -= hour * 3600;

    let minutes = (Math.trunc(timeNeededInSec / 60) + additionalMinutes).toString().padStart(2, '0');

    let sec = (Math.round(timeNeededInSec % 60)).toString().padStart(2, '0');

    console.log(`${hour}:${minutes}:${sec}`);
}

timeToWalk(4000, 0.60, 5);