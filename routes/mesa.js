var express = require('express');
var router = express.Router();
var mesa = require("../controllers/mesa");

const bodyParser = require('body-parser').json()

router.get("/mesa", mesa.list);
router.get("/mesa/:codigo", mesa.get);
router.post("/mesa", bodyParser, mesa.add);
router.put("/mesa/:codigo", bodyParser, mesa.update);
router.delete("/mesa/:codigo", mesa.delete);

module.exports = router;