function building(input) {
    let floorsAmount = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    let finalFloorRoomsNames = ``;

    for (let i = floorsAmount; i >= 1; i--) {
            for (let k = 0; k < roomsPerFloor; k++) {
                if (i === floorsAmount) {
                    finalFloorRoomsNames += `L${i}${k} `;
                } else if (i % 2 === 0) {
                    finalFloorRoomsNames += `O${i}${k} `;
                } else if (i % 2 !== 0) {
                    finalFloorRoomsNames += `A${i}${k} `;
                }
            }
        
        console.log(finalFloorRoomsNames);

        finalFloorRoomsNames = ``;
    }
}

building(["6", "5"]);