(function arrayExtensions() {
    Array.prototype.last = function () {
        //'this' is pointing to the the object Array => it is the passed array itself

        return this[this.length - 1];
    }

    Array.prototype.skip = function (elAmount) {
        const result = [];

        for (let i = elAmount; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.take = function (elAmount) {
        const result = [];

        for (let i = 0; i < elAmount; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.sum = function () {
        let result = 0;

        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }

        return result;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();