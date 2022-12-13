const express = require('express')
const app = express()
const port = 3000

const delay = (delayTime) => {
    const startTime = Date.now();
    while (Date.now() - startTime < delayTime) {};
}

app.get('/', (req, res) => res.send('Hello World!'));
app.get("/timer", (req, res) => {
    delay(9000);
    res.send(`process num ${process.pid}`)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))