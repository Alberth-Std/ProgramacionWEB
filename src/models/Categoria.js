// src/models/Categoria.js
const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, default: "" },
  estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
  