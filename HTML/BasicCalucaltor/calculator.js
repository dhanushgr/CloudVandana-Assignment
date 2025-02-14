document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const history = document.getElementById('history');
    const buttons = document.querySelectorAll('.buttons button');
    const themeToggle = document.getElementById('themeToggle');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    // Update display
    function updateDisplay() {
        result.value = currentInput;
    }

    // Handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = null;
                history.textContent = '';
            } else if (value === '=') {
                if (operator && previousInput && currentInput) {
                    try {
                        const resultValue = calculate(previousInput, currentInput, operator);
                        history.textContent = `${previousInput} ${operator} ${currentInput} =`;
                        currentInput = resultValue.toString();
                        previousInput = '';
                        operator = null;
                    } catch (error) {
                        currentInput = 'Error';
                    }
                }
            } else if (['+', '-', '×', '÷'].includes(value)) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });

    // Handle keyboard input
    document.addEventListener('keydown', function (e) {
        const key = e.key;

        if (key >= '0' && key <= '9') {
            currentInput += key;
        } else if (key === '.') {
            currentInput += key;
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
        } else if (key === 'Enter') {
            const equalsButton = document.querySelector('.equals');
            equalsButton.click();
        } else if (['+', '-', '*', '/'].includes(key)) {
            const operatorButton = document.querySelector(`[data-value="${key === '*' ? '×' : key === '/' ? '÷' : key}"]`);
            operatorButton.click();
        }

        updateDisplay();
    });

    // Calculate result
    function calculate(num1, num2, operator) {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '×':
                return a * b;
            case '÷':
                if (b === 0) throw new Error('Division by zero');
                return a / b;
            default:
                throw new Error('Invalid operator');
        }
    }

    // Toggle dark mode
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});