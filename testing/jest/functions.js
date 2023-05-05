const axios = require("axios");

const functions = {
	add: (a, b) => a + b,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = {
			firstName: "Mahmoud",
			lastName: "Safan",
		};
		return user;
	},
	fetchUser: async () => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
		return res.data;
	},
	fetchError: async () => {
		throw new Error("expected error message");
	},
};

module.exports = functions;
