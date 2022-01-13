const express = require('express');
const conexion = require('./conexion.js');

const router = express.Router();

//Data from hypothetical database

const server = express();

server.get('/empleados', async (req, res) => {
    list = await
    conexion.finduser('123456789ABC');
    res.send(list);
    res.end();
    console.log(list);
})

//conexion.finduser('123456789ABC');

server.listen(8080, () => {
    console.log('Server on port 8080');
});