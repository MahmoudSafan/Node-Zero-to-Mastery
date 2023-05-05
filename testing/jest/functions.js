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
};

module.exports = functions;
