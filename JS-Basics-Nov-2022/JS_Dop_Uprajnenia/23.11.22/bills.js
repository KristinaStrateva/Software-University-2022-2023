function bills(input) {
    let monthsAmount = Number(input[0]);

    let totalElectricityBill = 0;
    let totalWaterBill = monthsAmount * 20;
    let totalInternetBill = monthsAmount * 15;
    
    for (let i = 1; i <= monthsAmount; i++) {
        let currentElectricityBill = Number(input[i]);

        totalElectricityBill += currentElectricityBill;
    }

    let totalOtherBills = 1.2 * (totalElectricityBill + totalWaterBill + totalInternetBill) ;
    let averageBill = (totalElectricityBill + totalWaterBill + totalInternetBill + totalOtherBills) / monthsAmount;

    console.log(`Electricity: ${totalElectricityBill.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterBill.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetBill.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBill.toFixed(2)} lv`);
}

bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);