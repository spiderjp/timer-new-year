//Criação das constantes para receber os valores dos elementos HTML por meio dos IDs
const secondsContainer = document.querySelector("#seconds")
const minutesContainer = document.querySelector("#minutes")
const hoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")
const nextYearContainer = document.querySelector("#year")
const spinnerLoading = document.querySelector("#loading")
const countDownContainer = document.querySelector(".countdown")

//Criação de uma constante para receber o próximo ano, e uma para armazenar o tempo do Ano Novo

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

//Caso o valor de dias, horas, minutos e segundos sejam menores que 10, será adicionado 0 antes do número (ex: 9 -> 0+9 = 09)

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

//Mostrando o próximo ano na tela em uma div vazia
nextYearContainer.textContent = nextYear

const insertCountDownValues = ({days, hours, minutes, seconds}) =>{

//Passando os valores das constantes para os elementos HTML por meio dos IDs

secondsContainer.textContent =  getTimeUnit(seconds)
minutesContainer.textContent =  getTimeUnit(minutes)
hoursContainer.textContent = getTimeUnit(hours)
daysContainer.textContent = getTimeUnit(days)
}

const updateCountdown = () =>{

    //Quantidade de milisegundos para chegar no próximo ano
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    /*
    Quantidade de segundos (/1000), 
    minutos (/60),
    horas (/60),
    dias (/24) para chegar no próximo ano de forma arredondada pelo floor()
    */

    //Quantos segundos para acabar o minuto atual (o resto é por meio de %60):
    const seconds = Math.floor(difference / 1000) % 60

    //Quantos minutos para acabar a hora atual (o resto é por meio de %60):
    const minutes = Math.floor(difference / 1000 / 60) % 60

    // Quantas horas para acabar o dia (o resto é por meio do %24):
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)

    insertCountDownValues({days, hours, minutes, seconds})

}

const handleCountdownDisplay = () =>{

    spinnerLoading.remove() //removendo o spinnerLoading do DOM
}

//Invocar uma função em um tempo especificado em milisegundos 
setTimeout(handleCountdownDisplay, 1000)

//Invocar uma função repetidamente por meio do setInterval, a cada 1000 milisegundos = 1 segundo

setInterval(updateCountdown, 1000)


/*
Dica: SHIFT + ALT para duplicar a mesma linha quantas vezes desejar
*/