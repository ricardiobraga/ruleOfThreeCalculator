let btnCalcular = document.querySelector('[btnCalcular]')
let valorResultado = document.querySelector('[valorResultado]')

let inputA = document.querySelector('[inputA]')
let inputB = document.querySelector('[inputB]') 
let inputC = document.querySelector('[inputC]') 
let inputX = document.querySelector('[inputX]') 

let numero = 10


btnCalcular.onclick = function(){
    regraDeTres()
}

function regraDeTres(){
    //inputB * inputC / inputA


    let result = (inputB.value * inputC.value) / inputA.value

    valorResultado.innerHTML = result
    // valorResultado.value.innerHTML = result
    console.log(valorResultado)

}