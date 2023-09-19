function cityTaxes(townName, population, gold) {
    let townInfo = {
        name: townName,
        population,
        treasury: gold,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            this.population *= 1 + percentage / 100;
        },

        applyRecession(percentage) {
            this.treasury *= 1 - percentage / 100;
        }
    };

    return townInfo;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);