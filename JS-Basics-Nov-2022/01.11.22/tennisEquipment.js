function tennisEquipment(input) {
    let oneTennisRacketPrice = Number(input[0]);
    let tennisRacketAmount = Number(input[1]);
    let pairOfTrainersAmount = Number(input[2]);

    let pairOfTrainersPrice = oneTennisRacketPrice / Number(6);
    let totalTrainersPrice = pairOfTrainersAmount * pairOfTrainersPrice;
    let totalTennisRacketPrice = tennisRacketAmount * oneTennisRacketPrice;
    let otherEquipmentPrice = (totalTennisRacketPrice + totalTrainersPrice) * Number(0.2);
    let totalPrice = totalTennisRacketPrice + totalTrainersPrice + otherEquipmentPrice;

    let pricePaidByJokovic = Math.floor(totalPrice / 8);
    let pricePaidBySponsors = Math.ceil((totalPrice * 7) / 8);
    console.log(`Price to be paid by Djokovic ${pricePaidByJokovic}`);
    console.log(`Price to be paid by sponsors ${pricePaidBySponsors}`);
}

tennisEquipment(["850", "4", "2"]);