const router = require('express').Router();
const {
    getAllPlanets,
} = require('../controllers/planets.ctrl');

router.get('/getAllPlanets', getAllPlanets)

module.exports = router