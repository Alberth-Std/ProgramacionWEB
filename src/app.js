// src/app.js
const express = require('express');
const cors = require('cors');
const detectProtocol = require('./middlewares/detectProtocol');
const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());

// Middleware global 
app.use(detectProtocol);

// Registrar rutas
app.use('/api', routes);

module.exports = app;
