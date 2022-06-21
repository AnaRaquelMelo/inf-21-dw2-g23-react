const express = require("express");
const router = express.Router();

const filmeAtorController = require("../Controllers/filme-ator.controller");
const basicAuth = require("../middleware/basicAuth");


router.post("/", basicAuth, filmeAtorController.createFilmeAtor);


module.exports = router;
