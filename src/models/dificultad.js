const mongoose = require('mongoose');

const DificultadSchema = new mongoose.Schema({
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  subcategoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategoria', required: true },
  rangoEdad: { type: mongoose.Schema.Types.ObjectId, ref: 'RangoEdad', required: true },
  nivel: { type: String, enum: ['FACIL', 'MEDIO', 'DIFICIL'], required: true }
});

module.exports = mongoose.model('Dificultad', DificultadSchema);
