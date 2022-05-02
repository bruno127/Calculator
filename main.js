let currentNum = ""
let previousNum = ""
let operator = ""
let answer = ""

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector ('[data-equals')
const deleteButton = document.querySelector ('[data-delete')
const allClearButton = document.querySelector ('[data-all-clear')
const previousDisplay = document.querySelector ('[data-previous-operand')
const currentDisplay = document.querySelector ('[data-current-operand')
const decimalButton = document.querySelector ('[data-decimal]')

window.addEventListener('keydown', handleKeyboardInput)
decimalButton.addEventListener('click', addDecimal)
allClearButton.addEventListener('click', deleteAll)
deleteButton.addEventListener('click', deleteNumber)

numberButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    })
})

equalsButton.addEventListener('click', () => {
    if (currentNum != "" && previousNum != "") {
        calculate()
    }
})

function handleNumber(number) {
  if(currentNum.length >= 5) return
    currentNum += number
    currentDisplay.innerHTML = currentNum;
}

operationButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleOperation(e.target.textContent)
    })
})

function handleOperation(op) {
    if (previousNum === "") {
      previousNum = currentNum;
      operatorCheck(op);
    } else if (currentNum === "") {
      operatorChecktwo(op);
    } else {
      previousNum = currentNum;
      operatorCheck(op);
  }
}
  
  function operatorCheck(text) {
    operator = text;
    previousDisplay.textContent = previousNum + " " + operator;
    currentDisplay.textContent = "0";
    currentNum = "";
  }
  function operatorChecktwo(textTwo) {
    operator = textTwo;
    previousNum = answer
    previousDisplay.textContent = `${answer}` + " " + operator;
    currentDisplay.textContent = "0";
    currentNum = "";
  }

function calculate() {
    previousNum = parseFloat(previousNum)
    currentNum = parseFloat(currentNum)
    
    if(operator === "+") {
        answer = previousNum + currentNum
    }
    
    if(operator === "-") {
        answer = previousNum - currentNum
    }
    
    if(operator === "x") {
        answer = previousNum * currentNum
    }
    
    if(operator === "÷") { 
        if(currentNum <= 0) {
            previousNum.textContent = "0"
            displayResults()
            return;
        }
        answer = previousNum / currentNum
    }
    answer = roundResult(answer) //da rezultat iza točke nije predug
    answer = answer.toString()
    displayResults()
    }

    function displayResults() {
        if (answer.length <= 9) {
          currentDisplay.textContent = answer;
        } else {
          currentDisplay.textContent = answer.slice(0, 9) + "..."; // da rezultat nije predug
        }
        previousDisplay.textContent = "";
        operator = "";
        currentNum = "";
      }

    function deleteNumber() {
        currentNum = currentNum.slice(0, -1)
        currentDisplay.textContent = currentNum
        }

    function deleteAll() {
        operator = ""
        currentNum = ""
        previousNum = ""
        currentDisplay.textContent = "0"
        previousDisplay.textContent = ""
    }

    function roundResult(number) {
        return Math.round(number * 1000) / 1000
      }

    function addDecimal() {
        if(!currentNum.includes(".")){
            currentNum += "."
            currentDisplay.textContent = currentNum
        }
    }

    function handleKeyboardInput(e) {
      if (e.key >= 0 && e.key <= 9) handleNumber(e.key)
      if (e.key === ',') addDecimal()
      if (e.key === '=' || e.key === 'Enter') calculate()
      if (e.key === 'Backspace') deleteNumber()
      if (e.key === 'Escape') deleteAll()
      if (e.key === '+' || e.key === '-') 
        handleOperation(e.key)
      if (e.key === '*')
        handleOperation('x')
      if (e.key === '/')
        handleOperation('÷')
    }