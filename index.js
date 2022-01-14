const express = require('express');
const conexion = require('./conexion.js');

const router = express.Router();

//Data from hypothetical database

const app = express();

var res = conexion.finduser("123456789ABC");
console.log(res);

// app.get('/empleados', async (req, res) => {
//     //var id = req.params.id;
//     req.params.id = '123456789ABC';
//     var res = conexion.finduser(req, res);
//     console.log(res);
//     //res.send(res);
// });

//app.use('/', conexion);

//conexion.finduser('123456789ABC');

app.listen(8080, () => {
    console.log('Server on port 8080');
});