const Calculator = require("../index");
const calculator = new Calculator();

describe("Calculator class", () => {
	test("add method", () => {
		expect(calculator.add(1, 2)).toBe(3);
	});
	test("add negative numbers", () => {
		expect(calculator.add(-1, -2)).toBe(-3);
	});
	test("subtract method", () => {
		expect(calculator.subtract(2, 1)).toBe(1);
	});
	test("multiply method", () => {
		expect(calculator.multiply(2, 2)).toBe(4);
	});
	test("multiply method with zero", () => {
		expect(calculator.multiply(2, 0)).toBe(0);
	});
	test("divide method", () => {
		expect(calculator.divide(4, 2)).toBe(2);
	});
	test("divide method with zero", () => {
		expect(calculator.divide(4, 0)).toEqual(new Error("Can't Devide on zero"));
	});
});
