const express = require('express');
const path = require('path');

const friendsRoutes = require('./routes/friends.route');
const messagesRoutes = require('./routes/messages.route');

const server = express();
const PORT = 3000;


//logging middle ware
server.use((req, res, next) => {
    const reqTime = Date.now();
    next();
    const resTime = Date.now();
    console.log(`${req.method} ${req.url} it takes ${resTime - reqTime} ms`);

});

server.use(express.json());

// can access the index page on public folder, directly through http://127.0.0.1:3000/gui/index.html
server.use('/gui', express.static(path.join(__dirname, 'public')));

server.use('/messages', messagesRoutes);
server.use('/friends', friendsRoutes);

server.listen(3000, () => {
    console.log(`Server is running on port ${PORT} ...`);
})