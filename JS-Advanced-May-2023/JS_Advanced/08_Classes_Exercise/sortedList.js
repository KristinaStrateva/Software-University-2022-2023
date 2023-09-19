class List {
    constructor() {
        this.numbersArr = [];
        this.size = 0;
    }

    sizeUpdate() {
        this.size = this.numbersArr.length;
    }

    sort() {
        return this.numbersArr.sort((a, b) => a - b);
    }

    add(element) {
        this.numbersArr.push(element);
        this.sizeUpdate();
        this.sort();
    }

    remove(index) {
        if (this.numbersArr[index] !== undefined) {
            this.numbersArr.splice(index, 1);
            this.sizeUpdate();
            this.sort();
        }
    }

    get(index) {
        if (this.numbersArr[index] !== undefined) {
            return this.numbersArr[index];
        }
    }
}

let list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list.get(1));
list.remove(0);
console.log(list.get(1));