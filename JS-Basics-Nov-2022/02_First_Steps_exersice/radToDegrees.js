function radToDegrees(input) {
    let rad = Number(input[0]);

    let degrees = rad * (180/Math.PI);
    console.log(degrees);
}

radToDegrees(["6.2832"]);