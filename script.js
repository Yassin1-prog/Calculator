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
        case '/':
            return divide(a, b);
            break;
        default:
            return 'Not a valid operation';
    }
}


  