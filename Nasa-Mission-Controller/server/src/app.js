const express = require('express');
const cors = require('cors');
const app = express();

const planetsRouts = require('./routs/planets.route');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(planetsRouts);

module.exports = app;