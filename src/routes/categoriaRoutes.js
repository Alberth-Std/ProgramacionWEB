const express = require('express');
const router = express.Router();

const Categoria = require('../models/Categoria');

// Crear categoría (POST)
router.post('/', async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json({
      message: 'Categoría creada correctamente',
      data: categoria
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las categorías (GET)
router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
