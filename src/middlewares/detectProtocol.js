// src/middlewares/detectProtocol.js

module.exports = function detectProtocol(req, res, next) {
  let protocolo = "HTTP";

  // HTTP/2
  if (req.httpVersion === "2.0") {
    protocolo = "HTTP/2";
  }
  // HTTPS (solo funciona si el server.js usa https.createServer o http2.createSecureServer)
  else if (req.secure) {
    protocolo = "HTTPS";
  }

  // Mensaje en consola
  console.log(`📡 Conectado mediante ${protocolo}: ${req.method} ${req.url}`);

  // Lo guardamos para usarlo en respuestas
  req.protocolo = protocolo;

  next();
};
