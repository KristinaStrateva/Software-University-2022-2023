function mobileOperator(input) {
    let contractTerm = input[0];
    let contractType = input[1];
    let isMobileNet = input[2];
    let monthsToPay = Number(input[3]);

    let monthTax = 0;

    switch (contractTerm) {
        case "one":
            switch (contractType) {
                case "Small": monthTax = 9.98; break;
                case "Middle": monthTax = 18.99; break;
                case "Large": monthTax = 25.98; break;
                case "ExtraLarge": monthTax = 35.99; break;
            }
        break;
        case "two":
            switch (contractType) {
                case "Small": monthTax = 8.58; break;
                case "Middle": monthTax = 17.09; break;
                case "Large": monthTax = 23.59; break;
                case "ExtraLarge": monthTax = 31.79; break;
            }
        break;
    }

    if (isMobileNet === "yes") {
        if (monthTax <= 10) {
            monthTax += 5.5;
        } else if (monthTax <= 30) {
            monthTax += 4.35;
        } else {
            monthTax += 3.85;
        }
    }

    let totalTaxToPay = monthsToPay * monthTax;

    if (contractTerm === "two") {
        totalTaxToPay = 0.9625 * totalTaxToPay;
    }

    console.log(`${totalTaxToPay.toFixed(2)} lv.`);
}

mobileOperator(["two",
"Small",
"yes",
"20"]);