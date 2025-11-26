// src/routes/index.js
const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');
const preguntaRoutes = require('./preguntaRoutes');
const respuestaRoutes = require('./respuestaRoutes');
const cuestionarioRoutes = require('./cuestionarioRoutes');

// Agrupamos todas las rutas
router.use('/usuario', usuarioRoutes);
router.use('/pregunta', preguntaRoutes);
router.use('/respuesta', respuestaRoutes);
router.use('/categorias', require('./categoriaRoutes'));
router.use('/cuestionario', cuestionarioRoutes);
router.use('/rango-edad', require('./rangoEdadRoutes'));

module.exports = router;
