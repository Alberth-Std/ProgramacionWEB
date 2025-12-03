// src/routes/index.js
const express = require('express');
const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/usuario', require('./usuarioRoutes'));
router.use('/pregunta', require('./preguntaRoutes'));
router.use('/respuesta', require('./respuestaRoutes'));
router.use('/categorias', require('./categoriaRoutes'));
router.use('/cuestionario', require('./cuestionarioRoutes'));
router.use('/rango-edad', require('./rangoEdadRoutes'));
router.use('/subcategorias', require('./subcategoriaRoutes'));

module.exports = router;
