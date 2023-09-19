function cars(input) {
    let cars = {};

    for (const line of input) {
        const [command, token1, token2, token3] = line.split(' ');

        if (command === 'create') {
            createCar(token1, token3);
        } else if (command === 'set') {
            setKVP(token1, token2, token3);
        } else if (command === 'print') {
            print(cars[token1]);
        }
    }

    function createCar(name, parentName) {

        if (parentName) {
            return cars[name] = { inheritance: cars[parentName] };
        }

        return cars[name] = {};
    }

    function setKVP(name, key, value) {
        return cars[name][key] = value;
    }

    function print(obj) {
        let result = [];

        for (const key in obj) {
            if (key !== 'inheritance') {
                result.push(`${key}:${obj[key]}`);
            }
        }

        if (obj.inheritance) {
            for (const key in obj.inheritance) {
                if (key !== 'inheritance') {
                    result.push(`${key}:${obj.inheritance[key]}`);
                }
            }

            if (obj.inheritance.inheritance) {
                for (const key in obj.inheritance.inheritance) {
                    result.push(`${key}:${obj.inheritance.inheritance[key]}`);
                }
            }
        }

        return console.log(result.join(','));
    }
}

cars(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);

cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);