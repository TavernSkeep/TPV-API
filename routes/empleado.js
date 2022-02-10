var express = require('express');
var router = express.Router();
var empleado = require("../controllers/empleado");

const bodyParser = require('body-parser').json()

router.get("/empleado", empleado.list);
router.get("/empleado/:dni", empleado.get);
router.post("/empleado", bodyParser, empleado.add);
router.put("/empleado/:dni", bodyParser, empleado.update);
router.delete("/empleado/:dni", empleado.delete);

module.exports = router;

// - - - - - - - # - - - - - - - # - - - - - - - 
// router.post("/empleado", bodyParser, function(req, res){
//     console.log("DOMINGO")
//     console.log(req.body)
//     res.json(req.body)
//     res.end()
// });

