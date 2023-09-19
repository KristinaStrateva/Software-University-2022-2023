function cityRecord(townName, population, gold) {
    let townInfo = {name: townName, population, treasury: gold};

    return townInfo;
}

cityRecord('Tortuga', 7000, 15000);