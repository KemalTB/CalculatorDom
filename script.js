let currentInput = '0';
let memory = 0;
let grandTotalSum = 0;
let isOn = false;

function appendNumber(number) {
    if (!isOn) return;
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
    playSound();
}

function appendOperator(operator) {
    if (!isOn) return;
    currentInput += ` ${operator} `;
    updateDisplay();
    playSound();
}

function clearDisplay() {
    if (!isOn) return;
    currentInput = '0';
    updateDisplay();
    playSound();
}

function calculate() {
    if (!isOn) return;
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        currentInput = 'Error';
        updateDisplay();
    }
    playSound();
}

function updateDisplay() {
    document.getElementById('current').innerText = currentInput;
}

function playSound() {
    let audio = new Audio('beep.mp3');
    audio.play();
}

function percent() {
    if (!isOn) return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
    playSound();
}

function squareRoot() {
    if (!isOn) return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
    playSound();
}

function memoryAdd() {
    if (!isOn) return;
    memory += parseFloat(currentInput);
    document.getElementById('memory').innerText = 'M';
    playSound();
}

function memorySubtract() {
    if (!isOn) return;
    memory -= parseFloat(currentInput);
    document.getElementById('memory').innerText = 'M';
    playSound();
}

function memoryRecall() {
    if (!isOn) return;
    currentInput = memory.toString();
    updateDisplay();
    playSound();
}

function grandTotal() {
    if (!isOn) return;
    grandTotalSum += parseFloat(currentInput);
    currentInput = grandTotalSum.toString();
    updateDisplay();
    playSound();
}

function appendDecimal() {
    if (!isOn) return;
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
    playSound();
}

function toggleSign() {
    if (!isOn) return;
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateDisplay();
    playSound();
}

function turnOn() {
    isOn = true;
    currentInput = '0';
    updateDisplay();
    playSound();
}

function turnOff() {
    isOn = false;
    currentInput = '';
    document.getElementById('current').innerText = '';
    document.getElementById('memory').innerText = '';
    playSound();
}
