function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    paintedAreaWith1LGreen = 3.4;
    paintedAreaWith1LRed = 4.3;
    doorArea = 1.2 * 2;
    windowArea = 1.5 * 1.5;

    let frontWallArea = x * x - doorArea;
    let backWallArea = x * x;
    let sideWallsArea = 2 * x * y - 2 * windowArea;
    let totalGreenArea = frontWallArea + backWallArea + sideWallsArea;

    let rectangleRoofSidesArea = 2 * x * y;
    let triangleRoofSidesArea = 2 * ((x * h) / 2);
    let totalRedArea = rectangleRoofSidesArea + triangleRoofSidesArea;

    let totalGreenPaint = totalGreenArea / paintedAreaWith1LGreen;
    let totalRedPaint = totalRedArea / paintedAreaWith1LRed;
    console.log((totalGreenPaint).toFixed(2));
    console.log((totalRedPaint).toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"]);