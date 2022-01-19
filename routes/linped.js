var express = require('express');
var router = express.Router();
var linped = require("../controllers/linped");

const bodyParser = require('body-parser').json()

router.get("/linped", linped.list);
router.get("/linped/:codigo", linped.get);
router.post("/linped", bodyParser, linped.add);
router.put("/linped/:codigo", bodyParser, linped.update);
router.delete("/linped/:codigo", linped.delete);

module.exports = router;