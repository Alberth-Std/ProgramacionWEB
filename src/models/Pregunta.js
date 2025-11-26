// Aquí irá el esquema de Mongoose para las preguntas
// Campos: texto, tipo, opciones, categoría, dificultad
const mongoose = require('mongoose');

const PreguntaSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['seleccion', 'texto', 'numerica'],
    required: true
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Pregunta', PreguntaSchema);
