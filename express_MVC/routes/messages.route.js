const Router = require('express').Router();
const messagesCtrl = require('../controller/messages.controller');

Router.get('/', messagesCtrl.getMessages);

module.exports = Router;