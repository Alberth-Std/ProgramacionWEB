const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { nombre, correo, password, rol } = req.body;

    const existe = await Usuario.findOne({ correo });
    if (existe) return res.status(400).json({ message: "Correo ya registrado" });

    const hash = await bcrypt.hash(password, 10);

    const user = await Usuario.create({
      nombre,
      correo,
      password: hash,
      rol
    });

    res.json({ message: "Usuario registrado", user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    const user = await Usuario.findOne({ correo });
    if (!user) return res.status(400).json({ message: "Usuario incorrecto" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      {
        id: user._id,
        rol: user.rol,
        nombre: user.nombre
      },
      "secreto123",
      { expiresIn: "4h" }
    );

    res.json({ token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-password");
    res.json(usuarios);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

