function rocket(input) {
    let number = Number(input[0]);
    let prevRow = '';

    for (let i = 0; i < number + 5; i++) {
        let currRow = ``;

        if (i === 0) {
            currRow = `${'_'.repeat(number / 2 + 2)}^${'_'.repeat(number / 2 + 2)}`;
            console.log(currRow);

        } else {
            for (let j = 0; j < (number / 2 + 2) - i; j++) {
                currRow += '_';
            }

            currRow += '/';

            for (let k = 0; k < i - 2; k++) {
                currRow += '.';
            }

            if (i > 1) {
                currRow += '|||';
            } else {
                currRow += '|';
            }
            
            for (let l = 0; l < i - 2; l++) {
                currRow += '.';
            }

            currRow += '\\';

            for (let m = 0; m < (number / 2 + 2) - i; m++){
                currRow += '_';
            }

            if ((number / 2 + 2) - i === 0) {
                console.log(currRow);
                console.log(prevRow);
                break;
            } else {
                console.log(currRow);
            }

            prevRow = currRow;
        }
    }

    let rocketBody = `${'_'.repeat((number + 2) / 2)}|||${'_'.repeat((number + 2) / 2)}`;

    for (let i = 0; i < number; i++) {
        console.log(rocketBody);
    }

    for (let i = 0; i < number / 2 + 1; i++) {
        let currRow = ``;

        if (i === 0) {
            currRow = `${'_'.repeat((number + 2) / 2)}~~~${'_'.repeat((number + 2) / 2)}`;
            console.log(currRow);

        } else {
            for (let j = 0; j < (number / 2 + 2) - i - 1; j++) {
                currRow += '_';
            }

            currRow += '//';

            for (let k = 0; k < i - 1; k++) {
                currRow += '.';
            }

            currRow += '!';

            for (let l = 0; l < i - 1; l++) {
                currRow += '.';
            }

            currRow += '\\\\';

            for (let m = 0; m < (number / 2 + 2) - i - 1; m++) {
                currRow += '_';
            }

            console.log(currRow);
        }
    }
}

rocket(['4']);