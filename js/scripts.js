let btnCalcular = document.querySelector('[btnCalcular]')
let btnReset = document.querySelector('[btnReset]')
let valorResultado = document.querySelector('[valorResultado]')
let btnSwitch = document.querySelector('.btn-switch')

let inputA = document.querySelector('[inputA]')
let inputB = document.querySelector('[inputB]') 
let inputC = document.querySelector('[inputC]') 
let inputX = document.querySelector('[inputX]') 

let numero = 10


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        regraDeTres()
    }

})


btnCalcular.onclick = function(){
    regraDeTres()
}

btnSwitch.onclick = function(){
    switchValues();
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
    inputA.value = ""
    inputB.value = ""
    inputC.value = ""
    valorResultado.innerHTML = 0
}
function switchValues(){ 
    let a = inputA.value;
    let b = inputB.value;    
    inputA.value = b;
    inputB.value = a;
}
