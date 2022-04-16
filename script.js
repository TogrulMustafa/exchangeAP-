const amount = document.querySelector('#amount')
const firstCurrency = document.querySelector('#firstCurrency')
const secondCurrency = document.querySelector('#secondCurrency')



eventListeners()


function eventListeners() {
    amount.addEventListener('input', exchangeCurrency)
    firstCurrency.onchange = function() {
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent)
        ui.changeFCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent)
    }
    secondCurrency.onchange = function() {
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent)
        ui.changeSCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent)
    }
}

const currency = new Currency('USD','TRY')
const ui = new UI()

function exchangeCurrency() {
    currency.changeAmount(amount.value)
    currency.exchange()
    .then(result => {
        ui.showCurrency(result)
    })
    .catch(err => console.log(err))

}