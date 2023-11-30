const add = function(a, b) {
    let c = a + b;
    return c;	
};
  
const subtract = function(a, b) {
    let c = a - b;
    return c;	
};
  
  
const multiply = function(a, b) {
    let c = a * b;
    return c; 
};
  
const divide = function(a, b) {
    let c = a / b;
    return c;
};

let nbr1;
let nbr2;
let operator;

function operate(a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
            break;
        default:
            return 'Not a valid operation';
    }
}

const ford = document.querySelector('#ford');
const dot = document.querySelector('#dot');
const creen = document.querySelector('.screen');

function removeDot() {
    ford.removeChild(dot);
}

function handleDisplay(input) {
    if(input === 'Reset') {
        location.reload();
    }
    else {
        if(input === '.') {removeDot();}
        const content = document.createElement('div');
        content.textContent = input;
        creen.appendChild(content);
    }
}

function calculateResult() {
    let proplem = creen.textContent;
    const tokens = proplem.match(/\d+(\.\d+)?|\+|\-|\*|\÷/g) || [];
    const operators = tokens.filter(token => '+-*÷'.includes(token));
    const numbers = tokens.filter(token => /\d+(\.\d+)?/.test(token)).map(Number);
    let result = operate(numbers[0], numbers[1], operators[0]);
    if(operators.length === numbers.length) {
        for(let i = 1; i < operators.length - 1; i++) {
            result = operate(result, numbers[i+1], operators[i]);
        }
        creen.textContent = `${result}${operators[operators.length - 1]}`;
    }
    else {
        for(let i = 1; i < operators.length; i++) {
            result = operate(result, numbers[i+1], operators[i]);
        }
        if(isNaN(result)) { creen.textContent = "Syntax Error"; }
        else {
          creen.textContent = result;
        }
    }
}


function backtrack() {
    let current = creen.textContent;
    let final = current.slice(0, -1);
    creen.textContent = final;
}