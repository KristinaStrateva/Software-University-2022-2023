function birthdayParty(input) {
    let hallRent = Number(input[0]);

    let birthdayCake = hallRent * Number(0.2);
    let drinks = birthdayCake - (birthdayCake * Number(0.45));
    let animator = hallRent / Number(3);

    let totalBirthdaySpent = hallRent + birthdayCake + drinks + animator;
    console.log(totalBirthdaySpent);
}

birthdayParty(["2250"]);