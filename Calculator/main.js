// Global variable to store current, previous and operator
let operator = '';
let current = '';
let previous = '';

document.addEventListener("DOMContentLoaded", function(){

    // Store all components from HTML to js
    const clear = document.querySelector('#clear');
    const backSpace = document.querySelector('#back-space');
    const decimal = document.querySelector('#decimal');
    const equal = document.querySelector('#equal');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const sreenPrev = document.querySelector('.prev');
    const screenCurr = document.querySelector('.curr');

    
    // Handling numbers
    numbers.forEach((Number) => Number.addEventListener("click", (e) => {
        getNumber(e.target.textContent);
        screenCurr.textContent = current;
    }))

    // handling operators
    operators.forEach(op => op.addEventListener("click", function(e){
        getOperator(e.target.textContent);
        sreenPrev.textContent = `${previous} ${operator} `
        screenCurr.textContent = '';
    }))

    // Clearing the screen
    clear.addEventListener("click", () => {
        previous = '';
        current = '';
        operator = '';
        screenCurr.textContent = '';
        sreenPrev.textContent = '';
    });

    // removing last character
    backSpace.addEventListener("click", () => {
        current = current.slice(0,-1);
        screenCurr.textContent = current;
    })

    // handling equal sign
    equal.addEventListener("click", () => {
        screenCurr.textContent = calculate();
        sreenPrev.textContent = `${previous} ${operator} ${current}`
        previous = '';
        current = screenCurr.textContent;
        operator = '';

    });

    // Adding decimal 
    decimal.addEventListener("click", ()=>{
        addDecimal();
    })
});

// Function to get numbers
function getNumber(num){
    if( current.length < 12){
    current += num;
}
}

// Function to get operator sign
const getOperator = (op) => {
    if (current !== ''){
        previous = current;
        operator = op;
        current = '';
    }
}

// Function to make my calculator to function
const calculate = () => {
    current = Number(current);
    previous = Number(previous);
    let results = '';

    switch (operator){
        case '*': 
        results = previous * current;
        break;
        case '/':
            results =  previous / current;
            break;
        case '-':
            results = previous - current;
            break;
        case '+':
            results = previous + current;
            break;
        default:
            results = '';
    }

    results = parseFloat(results.toFixed(3));

    return results;
}

// function for decimal
const addDecimal = () => {
    if (!current.includes(".")){
        current += '.';
    }
}