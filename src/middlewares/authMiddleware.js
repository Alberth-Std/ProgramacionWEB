const jwt = require("jsonwebtoken");

exports.auth = (roles = []) => {
  return (req, res, next) => {
    try {
      const header = req.headers.authorization;
      if (!header) return res.status(401).json({ error: "Falta token" });

      const token = header.split(" ")[1];
      const decoded = jwt.verify(token, "secreto123");

      req.user = decoded;

      if (roles.length > 0 && !roles.includes(decoded.rol)) {
        return res.status(403).json({ error: "No autorizado" });
      }

      next();
    } catch (e) {
      res.status(401).json({ error: "Token invalido" });
    }
  };
};
