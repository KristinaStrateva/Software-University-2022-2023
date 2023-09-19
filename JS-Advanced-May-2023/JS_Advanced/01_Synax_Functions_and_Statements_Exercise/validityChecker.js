function validityChecker(x1, y1, x2, y2) {
    let isInteger1 = Number.isInteger(Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2)));
    let isInteger2 = Number.isInteger(Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2)));
    let isInteger3 = Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

    if (!isInteger1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if (!isInteger2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }

    if (!isInteger3) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
}

validityChecker(2, 1, 1, 1);