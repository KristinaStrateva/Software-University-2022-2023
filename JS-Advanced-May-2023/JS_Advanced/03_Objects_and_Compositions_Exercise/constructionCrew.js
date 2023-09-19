function constructionCrew(object) {
    if (object.dizziness) {
        object.levelOfHydrated += 0.1 * object.weight * object.experience;
        object.dizziness = false;
    }

    return object;
}

console.log(constructionCrew({ weight: 120,

    experience: 20,
    
    levelOfHydrated: 200,
    
    dizziness: true }));