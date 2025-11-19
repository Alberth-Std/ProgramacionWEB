const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas base
app.use('/api', routes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Cuestionarios funcionando (esqueleto).' });
});

// Conexión con MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cuestionarios';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err.message));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
