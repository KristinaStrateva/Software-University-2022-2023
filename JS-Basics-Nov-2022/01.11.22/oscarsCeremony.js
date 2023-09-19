function oscarsCeremony(input) {
    let hallRent = Number(input[0]);

    let statuettesPrice = hallRent - (hallRent * Number(0.3));
    let cateringPrice = statuettesPrice - (statuettesPrice * Number(0.15));
    let soundEffectsPrice = cateringPrice / Number(2);

    let totalPrice = (hallRent + statuettesPrice + cateringPrice + soundEffectsPrice).toFixed(2);
    console.log(totalPrice);
}

oscarsCeremony(["5555"]);