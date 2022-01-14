const express = require('express');
const req = require('express/lib/request');
const conexion = require('./conexion.js');

const router = express.Router();

//Data from hypothetical database

const app = express();

// req.params.id = "123456789ABC";
// var res = conexion.finduser(req, res);
// console.log(res);

const getresult = app.get('/empleados', async (req, res) => {
    req.params.id = '123456789ABC';
    var res = await conexion.finduser(req, res);
});

console.log('Resultado de get: \n');
console.log(getresult);

app.listen(8080, () => {
    console.log('Server on port 8080');
});