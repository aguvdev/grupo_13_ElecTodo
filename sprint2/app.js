const express = require("express");
const path = require("path");
const port = 3090;

const app = express();
app.use(express.static("public"));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/CarritoDeCompras', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')))
app.get('/MetodoDePago', (req,res) => res.sendFile(path.join(__dirname, 'views', 'metodoDePago.html')))
app.get('/ConfirmacionDeLaCompra', (req,res) => res.sendFile(path.join(__dirname, 'views', 'confirmacion.html')))
app.get('/carga', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carga.html')))
app.get('/detalle-producto', (req,res) => res.sendFile(path.join(__dirname, 'views', 'detalle-producto.html')))

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

