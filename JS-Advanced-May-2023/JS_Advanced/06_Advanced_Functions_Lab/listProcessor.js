function listProcessor(input) {
    let result = [];

    const commands = {
        add(string) {
            result.push(string);
        },

        remove(string) {

            while (result.includes(string)) {
                result.splice(result.indexOf(string), 1);
            }

        },

        print() {
            console.log(result.join(','));
        }
    }

    for (const line of input) {
        const [command, string] = line.split(' ');

        if (command !== 'print') {
            commands[command](string);

        } else {
            commands.print();
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'remove again', 'add hi', 'print']);