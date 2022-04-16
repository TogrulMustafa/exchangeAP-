class Currency {
    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = 'https://data.fixer.io/api/latest?base=';
        this.amount = null
    }
    exchange() {
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[this.secondCurrency]
                const moneyValue = Number(this.amount)
                const result = rate * moneyValue

                resolve(result)
            })
            .catch(err => reject(err))
        })
    }
    changeAmount(newAmount) {
        this.amount = newAmount  
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }
}