let currentNum = ""
let previousNum = ""
let operator = ""

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operater]')
const equalsButton = document.querySelector ('[data-equals')
const deleteButton = document.querySelector ('[data-delete')
const allClearButton = document.querySelector ('[data-all-clear')
const previousDisplay = document.querySelector ('[data-previous-operand')
const currentDisplay = document.querySelector ('[data-current-operand')

numberButtons.forEach(btn => {
    btn.addEventListener ('click', (e)=> {
        handleNumber(e.target.textContent)
    })
})

operationButtons.forEach

function handleNumber(number) {
    if(currentNum.length <= 12) { //zaustavlja dalje pisanje
    currentNum += (number)
    currentDisplay.innerHTML = currentNum
    }
}

function operationNumber(operation) {
    operator = operation
    currentDisplay.innerHTML = operator
}



    
