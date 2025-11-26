// src/routes/subcategoriaRoutes.js
const express = require('express');
const router = express.Router();
const subcategoriaController = require('../controllers/subcategoriaController');

// CRUD de subcategorías
router.post('/', subcategoriaController.crearSubcategoria);
router.get('/', subcategoriaController.obtenerSubcategorias);
router.get('/categoria/:categoriaId', subcategoriaController.obtenerSubcategoriasPorCategoria);
router.get('/:id', subcategoriaController.obtenerSubcategoria);

module.exports = router;