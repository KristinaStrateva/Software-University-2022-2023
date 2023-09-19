function weddingSeats(input) {
    let lastSector = input[0].charCodeAt();
    let rowsIn1StSectorAmount = Number(input[1]);
    let oddSeatsAmount = Number(input[2]);

    let evenSeatsAmount = 0;
    let totalSeatsAmount = 0;

    for (let sector = "A".charCodeAt(); sector <= lastSector; sector++) {
        for (let rows = 1; rows <= rowsIn1StSectorAmount; rows++) {
            if (rows % 2 === 0) {
                evenSeatsAmount = oddSeatsAmount + 2;

                totalSeatsAmount += evenSeatsAmount;
            
                for (let seats = "a".charCodeAt(); seats <= ("a".charCodeAt() + evenSeatsAmount - 1); seats++) {

                    console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(seats)}`);
                }

            } else {
                totalSeatsAmount += oddSeatsAmount;
                
                for (let seats = "a".charCodeAt(); seats <= ("a".charCodeAt() + oddSeatsAmount - 1); seats++) {
                    
                    console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(seats)}`);
                }
            }
        }

        rowsIn1StSectorAmount++;
    }

    console.log(totalSeatsAmount);
}

weddingSeats(["B", "3", "2"]);