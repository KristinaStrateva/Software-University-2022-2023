function figures() {
    class Figure {
        constructor(unit = 'cm') {
            this.units = unit;
        }

        get area() {}

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }

        get _divideValue() {
            if (this.units === 'mm') {
                return 0.1;
            } else if (this.units === 'm') {
                return 100;
            }

            return 1;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get radius() {
            return this._radius / this._divideValue;
        }

        get area() {
            let circleArea = Math.PI * this.radius ** 2;

            return circleArea;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this._width / this._divideValue;
        }

        get height() {
            return this._height / this._divideValue;
        }

        get area() {
            const rectangleArea = this.width * this.height;

            return rectangleArea;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

const newFig = figures();

const Rectangle = newFig.Rectangle;
const Circle = newFig.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm'); console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits('mm'); console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50