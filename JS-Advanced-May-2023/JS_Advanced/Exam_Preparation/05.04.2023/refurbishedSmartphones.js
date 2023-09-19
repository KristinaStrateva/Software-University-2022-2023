class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (
            model === '' ||
            typeof model !== 'string' ||
            !Number.isInteger(storage) ||
            storage < 0 ||
            price < 0 ||
            Number.isNaN(price) ||
            condition === '' ||
            typeof condition !== 'string'
        ) {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const modelInfo = this.availableSmartphones.find(x => x.model === model);

        if (!modelInfo) {
            throw new Error(`${model} was not found!`);
        }

        const currPhoneStorage = modelInfo.storage;
        let soldPrice = 0;
        const storageDifference = desiredStorage - currPhoneStorage;

        if (currPhoneStorage >= desiredStorage) {
            soldPrice = modelInfo.price;
        } else if (storageDifference <= 128) {
            soldPrice = modelInfo.price * 0.9;
        } else if (storageDifference > 128) {
            soldPrice = modelInfo.price * 0.8;
        }

        const currPhoneIndex = this.availableSmartphones.indexOf(modelInfo);

        this.availableSmartphones.splice(currPhoneIndex, 1);
        this.soldSmartphones.push({ model, storage: currPhoneStorage, soldPrice });
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }

        let result = 'Upgraded Smartphones:';

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;

            result += `\n${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`;
        });

        return result;
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        criteria === 'storage'
            ? this.soldSmartphones.sort((a, b) => b.storage - a.storage)
            : this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));

        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:`;

        this.soldSmartphones.forEach(phone => {
            result += `\n${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`;
        });

        return result;
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
