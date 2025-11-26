// src/models/subcategoria.js
const mongoose = require('mongoose');

const SubcategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true }
});

module.exports = mongoose.model('Subcategoria', SubcategoriaSchema);
