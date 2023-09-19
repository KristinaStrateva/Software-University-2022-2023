function createCalculator() {
    let value = 0;

    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

module.exports = createCalculator;

// const newFunc = createCalculator();

// newFunc.add(5);
// newFunc.add(5);
// newFunc.subtract(2);
// newFunc.add(5);
// console.log(newFunc.get());