const express = require("express");
const path = require("path");
const port = 3000;

const app = express();
app.use(express.static("public"));
app.get("/detalle-producto", (req,res) => res.sendFile(path.join(__dirname, "views","detalle-producto.html")));

app.listen(port, () => console.log("server corriendo port : " + port));