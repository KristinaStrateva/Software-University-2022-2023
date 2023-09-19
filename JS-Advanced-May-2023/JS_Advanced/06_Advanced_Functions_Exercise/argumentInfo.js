function argumentInfo(...args) {
    let result = new Map();

    for (const arg of args) {
        const typeOfArg = typeof arg;

        console.log(`${typeOfArg}: ${arg}`);

        if (!result.has(typeOfArg)) {
            result.set(typeOfArg, 0);
        }

        result.set(typeOfArg, result.get(typeOfArg) + 1);
    }

    Array.from(result)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, value]) => console.log(`${type} = ${value}`));
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999);