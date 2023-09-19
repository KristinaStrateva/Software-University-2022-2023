function celsiusToFahrenheit(input) {
    let celsius = Number(input[0]);

    let fahrenheit = celsius * 1.8 + 32;
    console.log((fahrenheit).toFixed(2));
}

celsiusToFahrenheit(["0"]);