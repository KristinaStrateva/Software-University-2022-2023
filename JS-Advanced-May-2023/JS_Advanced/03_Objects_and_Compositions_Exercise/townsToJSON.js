function townsToJSON(input) {
    let [emptyString, town, lat, long] = input.shift().split(/[\s]*\|[\s]*/);

    class TownInfo {
        constructor(townName, latitude, longitude) {
            this[town] = townName;
            this[lat] = Number(Number(latitude).toFixed(2));
            this[long] = Number(Number(longitude).toFixed(2));
        }
    }

    let result = [];

    for (const line of input) {
        let [emptyStr, townName, latitude, longitude] = line.split(/[\s]*\|[\s]*/);

        let currTownInfo = new TownInfo(townName, latitude, longitude);

        result.push(currTownInfo);
    }

    return JSON.stringify(result);
}

console.log(townsToJSON([
    '| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |',
]));