let btnCalcular = document.querySelector('[btnCalcular]')
let btnReset = document.querySelector('[btnReset]')
let valorResultado = document.querySelector('[valorResultado]')

let inputA = document.querySelector('[inputA]')
let inputB = document.querySelector('[inputB]') 
let inputC = document.querySelector('[inputC]') 
let inputX = document.querySelector('[inputX]') 

let numero = 10


btnCalcular.onclick = function(){
    regraDeTres()
}

btnReset.onclick = function(){
    reset()
}

function regraDeTres(){
    //inputB * inputC / inputA


    let result = (inputB.value * inputC.value) / inputA.value

    valorResultado.innerHTML = result.toFixed(2)
    // valorResultado.value.innerHTML = result
    console.log(valorResultado)

}

function reset(){
    
    inputA.value = "teste"
    inputB.value = "teste"
    inputC.value = "teste"
}