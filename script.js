

function calcular() {
let container = document.querySelector('.container')
let inputnome = document.querySelector('#nome')
let nome = inputnome.value


let inputaltura = document.querySelector('#altura')
let altura = Number(inputaltura.value)

let inputpeso = document.querySelector('#peso')
let peso = Number(inputpeso.value)

let escrever = document.querySelector('#escrever')
let status = document.querySelector('#status')

let imcc = peso/(altura**2)
let imc = imcc.toFixed(2)
    escrever.innerHTML = `Ola , ${nome} seu IMC e de ${imc}`

    if(imc <= 18.5) {
        status.innerHTML = '(Abaixo do normal)'
        container.style.BackgroundColor = 'red'
    } else if(imc > 18.5 && imc < 24.9) {
        status.innerHTML = '(Normal)'
    } else if(imc > 25 && imc < 29.9) {
        status.innerHTML = '(Sobrepeso)'
        container.style.BackgroundColor = 'yellow'
    } else if(imc > 30 && imc < 34.9) {
        status.innerHTML = '(Obesidade grau 1)'
        container.style.BackgroundColor = 'red'
    } else if(imc > 35 && imc < 39.9) {
        status.innerHTML = '(Obesidade grau 2)'
        container.style.BackgroundColor = 'red'
    } else if(imc > 40) {
        status.innerHTML = '(Obesidade grau 3)'
        container.style.BackgroundColor = 'red'
    }
}