var express = require('express');
var router = express.Router();
var ticket = require("../controllers/ticket");

const bodyParser = require('body-parser').json()

router.get("/ticket", ticket.list);
router.get("/ticket/:codigo", ticket.get);
router.post("/ticket", bodyParser, ticket.add);
router.put("/ticket/:codigo", bodyParser, ticket.update);
router.delete("/ticket/:codigo", ticket.delete);

module.exports = router;