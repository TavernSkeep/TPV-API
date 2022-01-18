var express = require('express');
var router = express.Router();
var empleado = require("../controllers/empleado");

const bodyParser = require('body-parser').json()

router.get("/empleado", empleado.list);
router.get("/empleado/:codigo", empleado.get);
router.post("/empleado", bodyParser, empleado.add);
router.put("/empleado/:codigo", bodyParser, empleado.update);
router.delete("/empleado/:codigo", empleado.delete);

module.exports = router;

// - - - - - - - # - - - - - - - # - - - - - - - 
// router.post("/empleado", bodyParser, function(req, res){
//     console.log("DOMINGO")
//     console.log(req.body)
//     res.json(req.body)
//     res.end()
// });

