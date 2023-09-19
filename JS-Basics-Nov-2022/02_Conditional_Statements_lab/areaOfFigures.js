function areaOfFigures(input) {
    let figureType = input[0];

    if (figureType === "square") {
        let a = Number(input[1]);

        let squareArea = (a * a).toFixed(3);
        console.log(squareArea);
    } else if (figureType === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        
        let rectangleArea = (a * b).toFixed(3);
        console.log(rectangleArea);
    } else if (figureType === "circle") {
        let r = Number(input[1]);

        let circleArea = (Math.PI * r * r).toFixed(3);
        console.log(circleArea);
    } else if (figureType === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);

        let triangleArea = ((a * h) / 2).toFixed(3);
        console.log(triangleArea);
    }
}

areaOfFigures(["triangle", "4.5", "20"]);