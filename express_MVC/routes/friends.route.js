const Router = require('express').Router();
const friendsCtrl = require('../controller/friends.controller');

Router.get('/', friendsCtrl.getFriends);

Router.get('/:friendID', friendsCtrl.getFriend);

Router.post('/', friendsCtrl.addFriend)

module.exports = Router