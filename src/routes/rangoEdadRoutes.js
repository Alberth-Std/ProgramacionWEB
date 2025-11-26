// src/routes/rangoEdadRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/rangoEdadController.js');

router.post('/', ctrl.crearRangoEdad);
router.get('/', ctrl.obtenerRangosEdad);

module.exports = router;
