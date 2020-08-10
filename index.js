const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// conectar base de datos
conectarDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({extended: true}));

//habilitar cors
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

//PUERTO DE LA APP
const port = process.env.PORT || 4000;

//ARRANCAR EL SERV.
app.listen(port, () => {
    console.log(`serv. corriendo en el puerto ${port} `);
});