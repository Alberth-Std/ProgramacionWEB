//src/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const { register, login, getUsuarios } = require("../controllers/authController");
const { auth } = require("../middlewares/authMiddleware");

// Registrar usuario
router.post("/register", register);

// Login
router.post("/login", login);

// Usuario autenticado (requiere token)
router.get("/me", auth(), (req, res) => {
  res.json({
    autenticado: true,
    usuario: req.user
  });
});

// Listado de usuarios (solo admin)
router.get("/usuarios", auth(["admin"]), getUsuarios);

module.exports = router;
