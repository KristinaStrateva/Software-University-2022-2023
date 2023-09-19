class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const productInfo = this.products.find(x => x.product === product);

        if (!productInfo) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= productInfo.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - productInfo.quantity
            productInfo.quantity += difference;

            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const productInfo = this.products.find(x => x.product === product);

        if (!productInfo) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        this.sales.push({ product, quantity: 1 });

        this.products[this.products.indexOf(productInfo)].quantity--;

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        let result = `You sold ${this.sales.length} products today!\nProducts in the warehouse:`;

        this.products.forEach(productInfo => {
            result += `\n${productInfo.product}-${productInfo.quantity} more left`;
        });

        return result;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.sellProduct('keyboard'));

