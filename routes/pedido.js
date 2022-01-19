var express = require('express');
var router = express.Router();
var pedido = require("../controllers/pedido");

const bodyParser = require('body-parser').json()

router.get("/pedido", pedido.list);
router.get("/pedido/:codigo", pedido.get);
router.post("/pedido", bodyParser, pedido.add);
router.put("/pedido/:codigo", bodyParser, pedido.update);
router.delete("/pedido/:codigo", pedido.delete);

module.exports = router;