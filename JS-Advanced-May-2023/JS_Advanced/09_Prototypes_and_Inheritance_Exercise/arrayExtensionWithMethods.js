(function arrayExtensions() {
    Array.prototype.last = function () {
        //'this' is pointing to the the object Array => it is the passed array itself

        return this[this.length - 1];
    }

    Array.prototype.skip = function (elAmount) {
        const result = this.slice(elAmount);

        return result;
    }

    Array.prototype.take = function (elAmount) {
        const result = this.slice(0, elAmount);

        return result;
    }

    Array.prototype.sum = function () {
        const result = this.reduce((acc, num) => acc + num, 0);

        return result;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();