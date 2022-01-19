var express = require('express');
var router = express.Router();
var empleado = require("../controllers/mesa");

const bodyParser = require('body-parser').json()

router.get("/mesa", empleado.list);
router.get("/mesa/:codigo", empleado.get);
router.post("/mesa", bodyParser, empleado.add);
router.put("/mesa/:codigo", bodyParser, empleado.update);
router.delete("/mesa/:codigo", empleado.delete);

module.exports = router;