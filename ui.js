class UI {

    constructor() {
        this.outputFirst = outputFirst;
        this.outputSecond = outputSecond;
        this.outputResult = outputResult
    }

    changeFCurrency(fCurrency) {
        this.outputFirst.textContent = fCurrency
    }
    changeSCurrency(sCurrency) {
        this.outputSecond.textContent = sCurrency
    }
    showCurrency(result) {
        this.outputResult.value = result
    }
}