class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space === 0) {
            throw new Error('Not enough space in the cellar.');
        }

        this.space--;
        this.wines.push({ wineName, wineType, price, paid: false });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const currWine = this.wineFind(wineName);

        if (!currWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (currWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        currWine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const currWine = this.wineFind(wineName);

        if (!currWine) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }

        if (currWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(this.wines.indexOf(currWine), 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.`;

            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach(wine => {
                    const isPaid = wine.paid ? 'Has Paid' : 'Not Paid';

                    result += `\n${wine.wineName} > ${wine.wineType} - ${isPaid}.`;
                });

            return result;
        }

        const wineToReturn = this.wines.find(wine => wine.wineType === wineType);

        if (!wineToReturn) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        const isPaid = wineToReturn.paid ? 'Has Paid' : 'Not Paid';

        return `${wineToReturn.wineName} > ${wineToReturn.wineType} - ${isPaid}.`;
    }

    wineFind(wineName) {
        return this.wines.find(wine => wine.wineName === wineName);
    }
}

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));
