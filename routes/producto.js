var express = require('express');
var router = express.Router();
var producto = require("../controllers/producto");

const bodyParser = require('body-parser').json()

router.get("/producto", producto.list);
router.get("/producto/:_id", producto.get);
router.post("/producto", bodyParser, producto.add);
router.put("/producto/:_id", bodyParser, producto.update);
router.delete("/producto/:_id", producto.delete);

module.exports = router;