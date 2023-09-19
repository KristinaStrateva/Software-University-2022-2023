function tradeCommissions(input) {
    let town = input[0];
    let profit = Number(input[1]);

    switch (town) {
        case "Sofia":
            if (profit >= 0 && profit <= 500) {
                console.log((profit * 0.05).toFixed(2));
            } else if (profit > 500 && profit <= 1000) {
                console.log((profit * 0.07).toFixed(2));
            } else if (profit > 1000 && profit <= 10000) {
                console.log((profit * 0.08).toFixed(2));
            } else if (profit > 10000) {
                console.log((profit * 0.12).toFixed(2));
            } else {
                console.log("error");
            } break;
        case "Varna":
            if (profit >= 0 && profit <= 500) {
                console.log((profit * 0.045).toFixed(2));
            } else if (profit > 500 && profit <= 1000) {
                console.log((profit * 0.075).toFixed(2));
            } else if (profit > 1000 && profit <= 10000) {
                console.log((profit * 0.1).toFixed(2));
            } else if (profit > 10000) {
                console.log((profit * 0.13).toFixed(2));
            } else {
                console.log("error");
            } break;
        case "Plovdiv":
            if (profit >= 0 && profit <= 500) {
                console.log((profit * 0.055).toFixed(2));
            } else if (profit > 500 && profit <= 1000) {
                console.log((profit * 0.08).toFixed(2));
            } else if (profit > 1000 && profit <= 10000) {
                console.log((profit * 0.12).toFixed(2));
            } else if (profit > 10000) {
                console.log((profit * 0.145).toFixed(2));
            } else {
                console.log("error");
            } break;
        default: console.log("error"); break;
    }
}

tradeCommissions(["Varna", "-50"]);