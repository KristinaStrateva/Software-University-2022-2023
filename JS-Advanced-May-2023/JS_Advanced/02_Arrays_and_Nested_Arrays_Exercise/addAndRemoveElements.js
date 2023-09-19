function addAndRemove(input) {
    let result = [];
    let number = 1;

    for (const command of input) {
        switch (command) {
            case 'add':
                result.push(number);
                break;

            case 'remove':
                result.pop();
                break;
        }

        number++;

    }

    if (result.length === 0) {
        console.log('Empty');

    } else {
        console.log(result.join('\n'));
    }
}

addAndRemove(['add',

'add',

'add',

'add']);