const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.get('/carga',(req,res) => res.sendFile(path.join(__dirname,'views','carga.html')))

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));