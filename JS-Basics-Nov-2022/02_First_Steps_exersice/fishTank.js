function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3] / 100);

    let tankVolume = length * width * height;
    let tankVolumeInLiters = tankVolume / 1000;

    let litersWaterNeeded = tankVolumeInLiters - (tankVolumeInLiters * percent);
    console.log(litersWaterNeeded);
}

fishTank(["105", "77", "89", "18.5"]);