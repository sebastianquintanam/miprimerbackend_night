console.log("Cargando configuracion...");
//Importar las dependencias
const express = require("express");

//Cargar configuracion app WEB
const PORT = process.env.PORT || 3500;

console.log("Inicializar la Aplicacion WEB...");
//Inicializar una APLICACION WEB
const app = express();

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION

console.log("Configurando Routers...");
//Configuracion de ROUTERS
app.get(
    "/",

    function (req, res) {
        res.send("Hello World!");
    }
);

app.use(
    "/app",

    express.static("front")
);
app.use("/static", express.static("front/static"));

console.log("Iniciando Servidor");

let server = app.listen(
    PORT,

    function () {
        console.log(`La aplicacion WEB esta escuchando en el PUERTO: ` + PORT);
    }
);

//AXIOS -> permite hacer peticiones HTTP