require("dotenv").config();
const fs = require("fs");
const spdy = require("spdy");
const http = require("http");
const https = require("https");
const connectDB = require("./config/db"); 
const app = require("./app");

// Conectar a MongoDB desde la carpeta config
connectDB();

// Leer certificados SSL
const key = fs.readFileSync("cert/server.key");
const cert = fs.readFileSync("cert/server.cert");

// Servidor HTTP
http.createServer(app).listen(3000, () => {
  console.log("Servidor HTTP escuchando en http://localhost:3000");
});

// Servidor HTTPS
https.createServer({ key, cert }, app).listen(3443, () => {
  console.log("Servidor HTTPS escuchando en https://localhost:3443");
});

// Servidor HTTP/2
spdy.createServer({ key, cert }, app).listen(4000, () => {
  console.log("Servidor SPDY/HTTP2 escuchando en https://localhost:4000");
});
