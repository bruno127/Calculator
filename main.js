const numberButtons = document.querySelectorAll ('[data-number]');
const screenDisplay = document. querySelector ('.screen-display');
const content = document.querySelector ('.content');
const buttons = document.querySelector ('.buttons');


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber (button.textContent))
)

function appendNumber (number) {
    if (screenDisplay.textContent === '0') {
        resetScreen()
    }
        screenDisplay.textContent += number;
    }

    function resetScreen() {
        screenDisplay.textContent = ''
    }
    
