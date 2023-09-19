function roadRadar(speed, area) {
    let speedDifference = 0;
    let speedLimit = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            speedDifference = speed - speedLimit;
            break;

        case 'interstate':
            speedLimit = 90;
            speedDifference = speed - speedLimit;
            break;

        case 'city':
            speedLimit = 50
            speedDifference = speed - speedLimit;
            break;

        case 'residential':
            speedLimit = 20;
            speedDifference = speed - speedLimit;
            break;
    }

    if (speedDifference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

    } else {
        status = speedStatus(speedDifference);

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

    function speedStatus(num) {
        let status = '';

        if (num <= 20) {
            status = 'speeding';

        } else if (num <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';
        }

        return status;
    }
}

roadRadar(40, 'city');

console.log('----------------');

roadRadar(21, 'residential');

console.log('----------------');

roadRadar(120, 'interstate');

console.log('----------------');

roadRadar(200, 'motorway');