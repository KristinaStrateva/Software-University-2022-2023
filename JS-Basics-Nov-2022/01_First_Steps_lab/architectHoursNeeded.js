function architectHoursNeeded(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let timeForOneProject = Number("3");

    let hours = projects * timeForOneProject;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}

architectHoursNeeded (["Kristina", "6"]);