function circleArea(input) {
    let inputType = typeof input;

    if (inputType === 'number') {
        let area = Math.PI * Math.pow(input, 2);

        console.log(area.toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea('name');