function solution() {

    let ingradients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

        apple(times) {
            if (this.carbohydrate - (Number(times) * 1) <= 0) {
                return `Error: not enough carbohydrate in stock`;
            } else if (this.flavour - (Number(times) * 2) <= 0) {
                return `Error: not enough flavour in stock`;
            } else {
                this.carbohydrate -= Number(times) * 1;
                this.flavour -= Number(times) * 2;
                return 'Success';
            }
        },

        lemonade(times) {
            if (this.carbohydrate - (Number(times) * 10) <= 0) {
                return `Error: not enough carbohydrate in stock`;
            } else if (this.flavour - (Number(times) * 20) <= 0) {
                return `Error: not enough flavour in stock`;
            } else {
                this.carbohydrate -= Number(times) * 10;
                this.flavour -= Number(times) * 20;
                return 'Success';
            }
        },

        burger(times) {
            if (this.carbohydrate - (Number(times) * 5) <= 0) {
                return `Error: not enough carbohydrate in stock`;
            } else if (this.fat - (Number(times) * 7) <= 0) {
                return `Error: not enough fat in stock`;
            } else if (this.flavour - (Number(times) * 3) <= 0) {
                return `Error: not enough flavour in stock`;
            } else {
                this.carbohydrate -= Number(times) * 5;
                this.fat -= Number(times) * 7;
                this.flavour -= Number(times) * 3;
                return 'Success';
            }
        },

        eggs(times) {
            if (this.protein - (Number(times) * 5) <= 0) {
                return `Error: not enough protein in stock`;
            } else if (this.fat - (Number(times) * 1) <= 0) {
                return `Error: not enough fat in stock`;
            } else if (this.flavour - (Number(times) * 1) <= 0) {
                return `Error: not enough flavour in stock`;
            } else {
                this.protein -= Number(times) * 5;
                this.fat -= Number(times) * 1;
                this.flavour -= Number(times) * 1;
                return 'Success';
            }
        },

        turkey(times) {
            if (this.protein - (Number(times) * 10) <= 0) {
                return `Error: not enough protein in stock`;
            } else if (this.carbohydrate - (Number(times) * 10) <= 0) {
                return `Error: not enough carbohydrate in stock`;
            } else if (this.fat - (Number(times) * 10) <= 0) {
                return `Error: not enough fat in stock`;
            } else if (this.flavour - (Number(times) * 10) <= 0) {
                return `Error: not enough flavour in stock`;
            } else {
                this.protein -= Number(times) * 10;
                this.carbohydrate -= Number(times) * 10;
                this.fat -= Number(times) * 10;
                this.flavour -= Number(times) * 10;
                return 'Success';
            }
        },

        restock(ingradient, amount) {
            this[ingradient] += Number(amount);
            return 'Success';
        },

        prepare(dish, amount) {
            return this[dish](amount);
        },

        print() {
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
    }

    return function (command) {
        let [currCommand, ingrOrDish, amount] = command.split(' ');

        return ingrOrDish && amount ? ingradients[currCommand](ingrOrDish, amount) : ingradients.print();
    };
}

let manager = solution();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));