var display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
}

function toCalculate(){
    display.value = eval(display.value)
}

function toClear(){
    display.value = ""
}