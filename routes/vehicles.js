const express = require('express');
const { getAllVehicles } = require('../controllers/vehicles');
const router = express.Router();


router.route('/').get(getAllVehicles);


module.exports = router;