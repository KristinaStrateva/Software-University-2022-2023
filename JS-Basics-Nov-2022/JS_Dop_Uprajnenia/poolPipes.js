function poolPipes(input) {
    let V = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let litersFromPipe1 = p1 * h;
    let litersFromPipe2 = p2 * h;

    let totalFullVolumeWater = litersFromPipe1 + litersFromPipe2;

    if (totalFullVolumeWater <= V) {
        let fullVolumeOfThePool = (totalFullVolumeWater / V) * 100;
        let pipe1PartOfTheVolume = (litersFromPipe1 / totalFullVolumeWater) * 100;
        let pipe2PartOfTheVolume = (litersFromPipe2 / totalFullVolumeWater) * 100;
        console.log(`The pool is ${(fullVolumeOfThePool).toFixed(2)}% full. Pipe 1: ${(pipe1PartOfTheVolume).toFixed(2)}%. Pipe 2: ${(pipe2PartOfTheVolume).toFixed(2)}%.`);
    } else {
        console.log(`For ${(h).toFixed(2)} hours the pool overflows with ${(totalFullVolumeWater - V).toFixed(2)} liters.`);
    }
}

poolPipes(["100", "100", "100", "2.5"]);