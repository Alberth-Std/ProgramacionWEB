// src/app.js
const express = require('express');
const cors = require('cors');

const routes = require("./routes");
const detectProtocol = require("./middlewares/detectProtocol");  // <-- importamos middleware

const app = express();

app.use(cors());
app.use(express.json());

// Middleware global 
app.use(detectProtocol);

// Registrar rutas
app.use('/api', routes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: `API de Cuestionarios funcionando mediante ${req.protocolo}.`
  });
});

module.exports = app;
