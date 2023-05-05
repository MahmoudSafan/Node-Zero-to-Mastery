const dbConnestion = () => {
	console.log("real db connection");
};

const dbCLose = () => {
	console.log("real db close");
};

/** jest life cycle
 * beforeAll
 * beforeEach
 * afterAll
 * afterEach
 * test
 

beforeAll(() => {
	dbConnestion();
});

afterAll(() => {
	dbCLose();
});

// beforeEach(() => {
// 	dbConnestion();
// });

// afterEach(() => {
// 	dbCLose();
// });

test("play 1", () => {
	expect(1).toBe(1);
});

test("play 2", () => {
	expect(1).toBe(1);
});

*/

describe("play", () => {
	beforeAll(() => {
		dbConnestion();
	});

	test("play 1", () => {
		expect(1).toBe(1);
	});

	test("play 2", () => {
		expect(1).toBe(1);
	});

	afterAll(() => {
		dbCLose();
	});
});
