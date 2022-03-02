const path = require('path');

const getMessages = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'assets', 'img0.jpg'));
};

module.exports = {
    getMessages,

}