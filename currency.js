function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    
    const rates = {
        'USD': { 'USD': 1, 'INR': 83.571, 'YEN': 158.52 },
        'INR': { 'USD': 0.012, 'INR': 1, 'YEN': 1.90 },
        'YEN': { 'USD': 0.0063, 'INR': 0.53, 'YEN': 1 }
    };
    
    const convertedAmount = amount * rates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
