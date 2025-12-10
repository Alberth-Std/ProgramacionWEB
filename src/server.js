// src/server.js
require("dotenv").config();
const fs = require("fs");
const http = require("http");
const https = require("https");
const http2 = require("http2");
const mongoose = require("mongoose");
const app = require("./app");

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error MongoDB:", err));

const key = fs.readFileSync("cert/server.key");
const cert = fs.readFileSync("cert/server.cert");

// HTTP
http.createServer(app).listen(3000, () => {
  console.log("Servidor HTTP → http://localhost:3000");
});

// HTTPS
https.createServer({ key, cert }, app).listen(3443, () => {
  console.log("Servidor HTTPS → https://localhost:3443");
});


// HTTP/2
const http2Server = http2.createSecureServer({ key, cert });

http2Server.on("stream", (stream, headers) => {
  // Respuesta simple compatible con HTTP/2
  stream.respond({
    "content-type": "application/json",
    ":status": 200
  });

  stream.end(JSON.stringify({
    message: "HTTP/2 funcionando"
  }));
});

http2Server.listen(4000, () => {
  console.log("Servidor HTTP/2 → https://localhost:400");
});
