function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let wCm = w * 100;
    let hCm = h * 100;

    hallwayWidth = 100;
    workPlaceWidth = 70;
    workPlaceLength = 120;
    
    let widthLeft = hCm - hallwayWidth;
    let workPlacesAmountInWidth = Math.floor(widthLeft / workPlaceWidth);
    let workPlacesAmountInLength = Math.floor(wCm / workPlaceLength);
    let workPlacesAmount = workPlacesAmountInWidth * workPlacesAmountInLength;

    let totalWorkPlacesAmount = workPlacesAmount - 3;
    console.log(totalWorkPlacesAmount);
}

trainingLab(["15", "8.9"]);