
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") //Está pegando o tipo de moeda selecionada

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 4.93
    const euroToday = 5.35
    const libraToday = 6.29
    const bitcoinToday = 127.847
    const bahtToday = 0.14
    const liraToday = 0.19
    const rubloToday = 0.051
    const ruppiaToday = 0.059
    const wonToday = 0.0037
    const ieneToday = 0.0033
    const yuanToday = 0.67

    if (currencySelect.value == "dolar") {  //Se o select estiver selecionado o valor de dolar entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { //Se o select estiver selecionado o valor de euro entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {  //Se o select estiver selecionado o valor de libra entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {  //Se o select estiver selecionado o valor de bitcoin entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "baht") {  //Se o select estiver selecionado o valor de bath entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("th-TH", {
            style: "currency",
            currency: "THB"
        }).format(inputCurrencyValue / bahtToday)
    }
    if (currencySelect.value == "lira-turca") {  //Se o select estiver selecionado o valor de lira turca entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(inputCurrencyValue / liraToday)
    }
    if (currencySelect.value == "rublo-russo") {  //Se o select estiver selecionado o valor de rublo russo entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / rubloToday)
    }
    if (currencySelect.value == "rupia-indiana") {  //Se o select estiver selecionado o valor de rupia indiana entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("hi-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / ruppiaToday)
    }
    if (currencySelect.value == "won") {  //Se o select estiver selecionado o valor de won entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue / wonToday)
    }
    if (currencySelect.value == "iene") {  //Se o select estiver selecionado o valor de iene entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }
    if (currencySelect.value == "yuan") {  //Se o select estiver selecionado o valor de yuan entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zn-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //Vai jogar o valor em real para a tela


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "baht") {
        currencyName.innerHTML = "Baht"
        currencyImage.src = "./assets/baht.png"
    }

    if (currencySelect.value == "lira-turca") {
        currencyName.innerHTML = " Lira Turca"
        currencyImage.src = "./assets/lira-turca.png"
    }

    if (currencySelect.value == "rublo-russo") {
        currencyName.innerHTML = "Rublo Russo"
        currencyImage.src = "./assets/rublo.png"
    }

    if (currencySelect.value == "rupia-indiana") {
        currencyName.innerHTML = "Rupia Indiana"
        currencyImage.src = "./assets/rupia.png"
    }

    if (currencySelect.value == "won") {
        currencyName.innerHTML = "Won"
        currencyImage.src = "./assets/won.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/iene.png"
    }

    if (currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan"
        currencyImage.src = "./assets/yuan.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)  //Ouvinte no select quando muda o valor
convertButton.addEventListener("click", convertValues) //Ouvinte no click quando muda o valor