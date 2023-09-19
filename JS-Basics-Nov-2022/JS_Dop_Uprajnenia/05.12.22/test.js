function solve(input) {
    let numDays = Number(input[0]);
    let totalFoodQuantity = Number(input[1]);
 
    let day = 0;
    let totalEatenDogFood = 0;
    let totalEatenCatFood = 0;
    let bisquit = 0;
    let index = 2;
 
 
    for(let i = 1; i < numDays; i++) {
        let foodEatenDog = Number(input[index]);
        index++;
        let foodEatenCat = Number(input[index]);
        index++;
 
        totalEatenDogFood += foodEatenDog;
        totalEatenCatFood += foodEatenCat;
 
        day++;
 
        if (day % 3 === 0) {
        bisquit += foodEatenDog + foodEatenCat * 0.1;
 
        day = 0;
        }
 
 
 
    }
 
    let totalEatenFood = foodEatenCat + foodEatenDog;
    let percentTotalFood = (totalEatenFood / totalFoodQuantity) * 100;
    let percentDogAte = (totalEatenDogFood / totalFoodQuantity) * 100;
    let percentCatAte = (totalEatenCatFood / totalFoodQuantity) * 100;
 
    console.log(`Total eaten biscuits: ${Math.round(bisquit)}gr.`);
    console.log(`${percentTotalFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogAte.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatAte.toFixed(2)}% eaten from the cat.`);
 
}
solve(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"]);
