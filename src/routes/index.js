const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');
const preguntaRoutes = require('./preguntaRoutes');
const respuestaRoutes = require('./respuestaRoutes');
const categoriaRoutes = require('./categoriaRoutes');
const cuestionarioRoutes = require('./cuestionarioRoutes');

// Agrupamos todas las rutas
router.use('/usuarios', usuarioRoutes);
router.use('/preguntas', preguntaRoutes);
router.use('/respuestas', respuestaRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/cuestionarios', cuestionarioRoutes);

module.exports = router;
