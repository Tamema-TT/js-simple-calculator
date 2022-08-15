//get result
function calculate(operator, op1, op2) {
    if(operator == '+') {
        const addition = parseFloat(op1) + parseFloat(op2);
        return addition;
    }
    if(operator == '-') {
        const subtraction = parseFloat(op1) - parseFloat(op2);
        return subtraction;
    }
    if(operator == 'x') {
        const multiplication = parseFloat(op1) * parseFloat(op2);
        return multiplication;
    }
    if(operator == '/') {
        const division = parseFloat(op1) / parseFloat(op2);
        return division;
    }
}

const keys = document.getElementsByTagName('button');
for(const key of keys) {
    key.addEventListener('click', function() {
        const keyValue = key.innerText;
        const display = document.getElementById('display-result');
        const displayHidden = document.getElementById('hidden-input');
        const operatorHidden = document.getElementById('hidden-operator');
        if(display.innerText == '0') {
            display.innerText = keyValue;
        }
        else if(key.classList.contains('operators')) {
            operatorHidden.innerText = keyValue;
            displayHidden.innerText = display.innerText;
            display.innerText = '';
        }
        else if(keyValue == '=') {
            display.innerText = calculate(operatorHidden.innerText, displayHidden.innerText, display.innerText,);
        }
        else {
            display.innerText = display.innerText + keyValue;
        }
    });
}

document.getElementById('clear').addEventListener('click', function() {
    const display = document.getElementById('display-result');
    display.innerText = 0;
})