document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
  
    let currentInput = '';
    let currentOperator = '';
    let resultDisplayed = false;
  
    buttons.addEventListener('click', function (event) {
      const buttonValue = event.target.textContent;
  
      if (buttonValue === 'C') {
        clearCalculator();
      } else if (buttonValue === '=') {
        evaluate();
      } else {
        handleInput(buttonValue);
      }
    });
  
    function handleInput(value) {
      if (isOperator(value)) {
        handleOperator(value);
      } else {
        handleDigit(value);
      }
      updateDisplay();
    }
  
    function isOperator(value) {
      return ['+', '-', '*', '/'].includes(value);
    }
  
    function handleOperator(operator) {
      if (currentInput !== '' && !resultDisplayed) {
        currentOperator = operator;
        currentInput += operator;
      }
    }
  
    function handleDigit(digit) {
      if (resultDisplayed) {
        clearCalculator();
      }
      currentInput += digit;
    }
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function clearCalculator() {
      currentInput = '';
      currentOperator = '';
      resultDisplayed = false;
      updateDisplay();
    }
  
    function evaluate() {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        resultDisplayed = true;
        updateDisplay();
      } catch (error) {
        display.textContent = 'Error';
      }
    }
  });
  