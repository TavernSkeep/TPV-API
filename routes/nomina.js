var express = require('express');
var router = express.Router();
var nomina = require("../controllers/nomina");

const bodyParser = require('body-parser').json()

router.get("/nomina", nomina.list);
router.get("/nomina/:codigo", nomina.get);
router.post("/nomina", bodyParser, nomina.add);
router.put("/nomina/:codigo", bodyParser, nomina.update);
router.delete("/nomina/:codigo", nomina.delete);

module.exports = router;