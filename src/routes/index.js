const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');
const preguntaRoutes = require('./preguntaRoutes');
const respuestaRoutes = require('./respuestaRoutes');
const categoriaRoutes = require('./categoriaRoutes');
const cuestionarioRoutes = require('./cuestionarioRoutes');

// Agrupamos todas las rutas
router.use('/usuario', usuarioRoutes);
router.use('/pregunta', preguntaRoutes);
router.use('/respuesta', respuestaRoutes);
router.use('/categoria', categoriaRoutes);
router.use('/cuestionario', cuestionarioRoutes);

module.exports = router;
