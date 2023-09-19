class Rectangle {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get color() {
        return this._color;
    }

    calcArea() {
        const area = this.width * this.height;

        return area;
    }
}