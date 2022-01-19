var express = require('express');
var router = express.Router();
var producto = require("../controllers/pedido");

const bodyParser = require('body-parser').json()

router.get("/pedido", producto.list);
router.get("/pedido/:codigo", producto.get);
router.post("/pedido", bodyParser, producto.add);
router.put("/pedido/:codigo", bodyParser, producto.update);
router.delete("/pedido/:codigo", producto.delete);

module.exports = router;