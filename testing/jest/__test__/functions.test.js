const functions = require("../functions");

test("add 1 + 2 should be 3", () => {
	expect(functions.add(1, 2)).toBe(3);
});

test("is falsy", () => {
	expect(functions.isNull()).toBeNull();
});

test("is falsy", () => {
	expect(functions.isNull()).toBeFalsy();
});

test("is not to be falsy", () => {
	expect(functions.checkValue(1)).not.toBeFalsy();
});

test("should be user object", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Mahmoud",
		lastName: "Safan",
	});
});

test("should be less than or qual 1600 kg", () => {
	const weight1 = 800;
	const weight2 = 800;
	expect(weight1 + weight2).toBeLessThanOrEqual(1600);
});

test("regex test", () => {
	expect("team").not.toMatch(/I/);
});
