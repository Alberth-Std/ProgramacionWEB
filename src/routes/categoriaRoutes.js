// src/routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Ruta para crear una nueva categoría
router.post('/', categoriaController.crearCategoria);

// Ruta para obtener todas las categorías
router.get('/', categoriaController.obtenerCategorias);

module.exports = router;
