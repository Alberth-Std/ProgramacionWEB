// src/routes/categoriaRoutes.js
const express = require("express");
const router = express.Router();

const { crearCategoria, obtenerCategorias } = require("../controllers/categoriaController");
const { auth } = require("../middlewares/authMiddleware");

// Crear categoría – solo admin
router.post("/", auth(["admin"]), crearCategoria);

// Obtener categorías – cualquier usuario logueado
router.get("/", auth(), obtenerCategorias);

module.exports = router;
