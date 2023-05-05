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

test("Array should contain an admin", () => {
	const users = ["admin", "user", "guest"];
	expect(users).toContain("admin");
});

test("user fetched name should be Leanne Graham", async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});

test("async function throws error", async () => {
	expect.assertions(1);
	try {
		await functions.fetchError();
	} catch (error) {
		expect(error.message).toMatch("expected error message");
	}
});

/** 
test("create user with missing data returns 400", async () => {
	try {
		const response = await axios.post("https://example.com/api/users", {
			name: "John Doe",
		});
	} catch (error) {
		expect(error.response.status).toBe(400);
	}
});

test("create user with valid data returns 201", async () => {
	expect.assertions(2);
	const response = await axios.post("https://example.com/api/users", {
		name: "John Doe",
		email: "johndoe@example.com",
	});
	expect(response.status).toBe(201);
	expect(response.data).toEqual({
		id: expect.any(Number),
		name: "John Doe",
		email: "johndoe@example.com",
	});
});

*/
