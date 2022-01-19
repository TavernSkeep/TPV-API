const express = require('express');
const req = require('express/lib/request');
var empleado = require('./routes/empleado');
var producto = require('./routes/producto');
var mesa = require('./routes/mesa');
var pedido = require('./routes/pedido');
var linped = require('./routes/linped');
var ticket = require('./routes/ticket');
var nomina = require('./routes/nomina');
var http = require('http');

const router = express.Router();

//const conexion = require('./conexion.js');

const app = express();

// req.params.id = "123456789ABC";
// var res = conexion.finduser(req, res);
// console.log(res);
/*
const getresult = app.get('/empleados', async (req, res) => {
    req.params.id = '123456789ABC';
    var res = await conexion.finduser(req, res);
});

console.log('Resultado de get: \n');
console.log(getresult);
*/

app.set('port', process.env.PORT || 8080);


app.use('/', empleado);
app.use('/', producto);
app.use('/', pedido);
app.use('/', mesa);
app.use('/', ticket);
app.use('/', linped);
app.use('/', nomina);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//crea un servidor http
app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Servidor iniciado, escuchando por el puerto ' + app.get('port'));
});