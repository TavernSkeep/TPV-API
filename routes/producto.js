var express = require('express');
var router = express.Router();
var producto = require("../controllers/producto");

const bodyParser = require('body-parser').json()

router.get("/producto", producto.list);
router.get("/producto/:codigo", producto.get);
router.post("/producto", bodyParser, producto.add);
router.put("/producto/:codigo", bodyParser, producto.update);
router.delete("/producto/:codigo", producto.delete);

module.exports = router;