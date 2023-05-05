// init express server
const express = require("express");
const cluster = require("cluster");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	console.log(`Worker ${process.pid} started`);

	const app = express();
	const port = 3000;

	app.use("/", (req, res) => {
		res.send("Hello  World!");
	});

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
}
