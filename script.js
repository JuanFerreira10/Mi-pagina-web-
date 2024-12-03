function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;
    let result = document.getElementById("result");

    // Tasas de cambio (fijas para este ejemplo)
    const exchangeRates = {
        "USD_UYU": 45.2, // 1 USD = 45.2 UYU
        "UYU_USD": 1 / 45.2, // 1 UYU = 1 / 45.2 USD
        "EUR_USD": 1.1, // 1 EUR = 1.1 USD
        "USD_EUR": 1 / 1.1, // 1 USD = 1 / 1.1 EUR
        "EUR_UYU": 50.0, // 1 EUR = 50 UYU
        "UYU_EUR": 1 / 50.0 // 1 UYU = 1 / 50 EUR
    };

    if (isNaN(amount) || amount <= 0) {
        result.innerHTML = "Por favor ingresa una cantidad válida.";
        return;
    }

    let conversionKey = `${fromCurrency}_${toCurrency}`;
    let rate = exchangeRates[conversionKey];

    if (!rate) {
        result.innerHTML = "Conversión no soportada.";
    } else {
        let convertedAmount = (amount * rate).toFixed(2);
        result.innerHTML = `Resultado: ${convertedAmount} ${toCurrency}`;
    }
}
