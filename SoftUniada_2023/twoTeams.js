function twoTeams(input) {
    let playersAmount = Number(input.shift());

    let ascendingSortedTeam = input[0]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);

    let descendingSortedTeam = input[0]
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);

    console.log()
}

// twoTeams([
//     '8',
//     '15 18 16 17 17 16 18 15']);

// twoTeams([
//     '12',
//     '14 15 8 9 11 13 10 12 9 8 15 14']);

twoTeams([
    '25',
    '33 13 8 21 7 19 18 16 11 25 20 15 32 35 22 14 26 29 31 17 28 12 30 23 24']);