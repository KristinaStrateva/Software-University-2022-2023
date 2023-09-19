function carFactory(object) {
    let carriagesTypes = [{type: 'hatchback', color: object.color}, {type: 'coupe', color: object.color}];

    let modifiedCar = {
        model: object.model,
        engine: engineType(object.power),
        carriage: {type: object.carriage, color: object.color},
        wheels: isOdd(object.wheelsize)
    }

    return modifiedCar;

    function engineType(power) {
        let result = {};

        if (power <= 90) {
            result.power = 90;
            result.volume = 1800;
        } else if (power <= 120) {
            result.power = 120;
            result.volume = 2400;
        } else  {
            result.power = 200;
            result.volume = 3500;
        }

        return result;
    }

    function isOdd(wheelSize) {
        if (wheelSize % 2 === 0) {
            wheelSize -= 1;
        }

        return [wheelSize, wheelSize, wheelSize, wheelSize];
    }
}

console.log(carFactory({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 }));