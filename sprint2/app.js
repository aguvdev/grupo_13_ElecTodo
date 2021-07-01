const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
app.get('/CarritoDeCompras', (req, res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')))
app.get('/MetodoDePago', (req, res) => res.sendFile(path.join(__dirname, 'views', 'metodoDePago.html')))
app.get('/ConfirmacionDeLaCompra', (req, res) => res.sendFile(path.join(__dirname, 'views', 'confirmacion.html')))