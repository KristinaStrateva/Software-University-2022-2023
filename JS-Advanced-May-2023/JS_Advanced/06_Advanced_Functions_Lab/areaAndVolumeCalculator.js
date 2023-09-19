function area() {
return Math.abs(this.x * this.y);
};

function vol() {
return Math.abs(this.x * this.y * this.z);
};

function solve(area, volume, input) {
    const coordinates = JSON.parse(input);
    let resultObj = [];

    coordinates.forEach(line => {
        resultObj.push({
            area: area.call(line),
            volume: volume.call(line)
        })
    });

    return resultObj;
}

solve(area, vol, `[

{"x":"1","y":"2","z":"10"},

{"x":"7","y":"7","z":"10"},

{"x":"5","y":"2","z":"10"}

]`);