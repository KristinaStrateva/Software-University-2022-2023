function createSortedList() {
    let collection = [];

    let specialObject = {
        size: 0,

        add(num) {
            collection.push(num);
            this.size++;
            collection.sort((a, b) => a - b);
        },

        remove(index) {
            if (index >= 0 && index < collection.length) {
                collection.splice(index, 1);
                this.size--;
            }
        },

        get(index) {
            if (index >= 0 && index < collection.length) {
                return collection[index];
            }
        },
    };

    return specialObject;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(3);
console.log(list.get(1));
console.log(list.size);