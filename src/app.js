const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const routes = require('./routes'); // index.js con rutas agrupadas

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'API de Cuestionarios funcionando.' });
});

module.exports = app;
