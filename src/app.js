// src/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar conexión Mongo
const connectDB = require('./config/db');

// Importar rutas
const routes = require('./routes');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas base
app.use('/api', routes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de Cuestionarios funcionando (esqueleto).' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
