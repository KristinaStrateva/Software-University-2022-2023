function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let roomVolume = width * length * height;
    let boxesAmount = input[index];
    let boxVolume = 1;

    while (boxesAmount !== "Done") {
        boxesAmount = Number(input[index]);
        index++;

        roomVolume = roomVolume - (boxesAmount * boxVolume);

        if (roomVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(roomVolume)} Cubic meters more.`);
        return;
        }

        boxesAmount = input[index];
    }

    console.log (`${roomVolume} Cubic meters left.`);
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);