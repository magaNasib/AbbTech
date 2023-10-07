let operationBtns = document.querySelectorAll('.operationBtns')
let numbers = document.querySelectorAll('.number')
let clearBtn = document.getElementById('clearBtn')
let screen = document.getElementById('screen')
let equalBtn = document.getElementById('equalBtn')

let firstNumber = '';
let currOperand = '';
let lastNumber = '';

function events() {

    operationBtns.forEach((operand) => {
        operand.addEventListener('click', operandClickHandler)
    })

    numbers.forEach((number) => {
        number.addEventListener('click', numberClickHandler)
    })

    equalBtn.addEventListener('click', () => {
        if (!isNaN(firstNumber) && !isNaN(firstNumber) && currOperand) {
            countAndDisplay()
        }
    })
    clearBtn.addEventListener('click', () => {
        screen.innerText = '';
        firstNumber = ''
        lastNumber = ''
        currOperand = ''
    })

}

function operandClickHandler(e) {
    currOperand = e.target.innerText;
    screen.innerText += e.target.innerText
}

function numberClickHandler(e) {
    if (currOperand) {
        lastNumber += e.target.innerText;
        screen.innerText += e.target.innerText
    }
    else {
        firstNumber += e.target.innerText
        screen.innerText += e.target.innerText
    }
}

function countAndDisplay() {

    screen.innerText = '';
    let overall
    switch (currOperand) {
        case '/': overall = +firstNumber / +lastNumber;
            overall = overall.toFixed(3)
            overall = Number(overall)
            break;
        case '+':
            overall = +firstNumber + +lastNumber;
            break
        case 'X':
            overall = +firstNumber * +lastNumber;
            break
        case '-':
            overall = +firstNumber - +lastNumber
            break
        case '%':
            overall = +firstNumber % +lastNumber
            break


    }

    screen.innerText = overall
    firstNumber = overall
    lastNumber = ''
    currOperand = ''
}

events()