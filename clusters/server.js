const express = require('express');
const os = require("os");
const cluster = require("cluster");

const app = express();
const port = 3000;

const delay = (delayTime) => {
    const startTime = Date.now();
    while (Date.now() - startTime < delayTime) {};
}

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/timer", (req, res) => {
    delay(9000);
    res.send(`process num ${process.pid}`)
});

if (cluster.isMaster) {
    console.log("Master Process is running..");
    const PROCESSOR_LENGTH = os.cpus().length;
    console.log(PROCESSOR_LENGTH);
    for (let i = 0; i < PROCESSOR_LENGTH; i++)
        cluster.fork();


} else {
    console.log(`Fork process is running`);
    app.listen(port);
}