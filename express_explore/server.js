const { json } = require('express');
const express = require('express');
const server = express();
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

//logging middle ware
server.use((req, res, next) => {
    const reqTime = Date.now();
    next();
    const resTime = Date.now();
    console.log(`${req.method} ${req.url} it takes ${resTime - reqTime} ms`);

});

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to Express Server</h1>`)
});

server.get('/friends', (req, res) => {
    res.status(200).json(friends);
});

server.get('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);

    if (friends[friendID]) {
        res.status(200).json(friends[friendID]);
    } else {
        res.status(404).json({
            'Error': 'The Friend Does Not Exist'
        });
    }
});

server.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            'Error': 'name was missed'
        });
    }

    let newFriend = {
        name: req.body.name,
        id: friends.length
    };

    friends.push(newFriend);

    res.json(newFriend);
})

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});