class calculator {
	add(a, b) {
		return a + b;
	}
	subtract(a, b) {
		return a - b;
	}
	multiply(a, b) {
		return a * b;
	}
	divide(a, b) {
		return b === 0 ? new Error("Can't Devide on zero") : a / b;
	}
}

module.exports = calculator;
