const http = require('http');
const PORT = 3000;

const friends = [{
        id: 0,
        name: 'Ahmed'
    },
    {
        id: 1,
        name: 'Mohamed'
    },
    {
        id: 2,
        name: 'Moustafa'
    }
];

const server = http.createServer();
server.on('request', (req, res) => {

    const url = req.url.split('/');

    if (req.method == 'GET' && url[1] === 'home' || url[1] == '') {

        res.setHeader('Content-Type', 'text/html')
        res.write(`
        <html>
        <head>
        <title>Home</title>
        </head>
        <body>
        <h1>Hello Friend!</h1>
        </body>
        </html>
        `);
        res.end();

    } else if (req.method == 'GET' && url[1] === 'friends-data') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        if (url.length == 3 && Number(url[2]) <= 3) {
            res.end(JSON.stringify(friends[Number(url[2])]))
        } else {
            res.end(JSON.stringify(friends));
        }

    } else if (req.method == 'POST' && url[1] === 'friends-data') {
        //data will come as a buffer
        req.on('data', (data) => {
            const strData = data.toString();
            console.log(strData);
            friends.push(JSON.parse(strData));
        });

        // // to make an post request on the browser's console
        // fetch('http://127.0.0.1:3000/friends-data', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         id: 3,
        //         name: 'came form console'
        //     })
        // });


    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
                <head>
                    <title>404</title>
                </head>
                <body>
                    <h1>404 The Page Does Not Exist</h1>
                </body>
            </html>
        `);
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server Running on port ${PORT}`);
});