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

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});