// crear add, substract, multiply, divide

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

var firstOperand = 0;
var secondOperand = 0;
var operator = "add";

function operate(firstOperand, secondOperand, operator) {
	switch (operator) {
		case "add":
			return add(firstOperand, secondOperand);
			break;
		case "substract":
			return substract(firstOperand, secondOperand);
			break;
		case "multiply":
			return multiply(firstOperand, secondOperand);
			break;
		case "divide":
			return divide(firstOperand, secondOperand);
			break;
		default:
			break;
	}
}

/* UI */
const keys = document.querySelectorAll(".key");

keys.forEach((key) =>
	key.addEventListener("click", (e) => doSomething(e.target.value))
);

function doSomething(value) {
	console.log(value);
}
