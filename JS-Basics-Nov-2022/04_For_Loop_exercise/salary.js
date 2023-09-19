function salary(input) {
    let openTabs = Number(input[0]);
    let salaryAmount = Number(input[1]);

    let openTabsText = 0;
    let fee = 0;

    for (let i = 2; i <= openTabs + 1; i++) {
        openTabsText = input[i];
        if (openTabsText === "Facebook") {
            fee += 150;
            if ((salaryAmount - fee) <= 0) {
                console.log("You have lost your salary.");
            break;
            }
        } else if (openTabsText === "Instagram") {
            fee += 100;
            if ((salaryAmount - fee) <= 0) {
                console.log("You have lost your salary.");
            break;
            }
        } else if (openTabsText === "Reddit") {
            fee += 50;
            if ((salaryAmount - fee) <= 0) {
                console.log("You have lost your salary.");
            break;
            }
        }    
    } 
    
    if (salaryAmount > fee) {
        console.log((salaryAmount - fee).toFixed(0));
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook", "Facebook"]);