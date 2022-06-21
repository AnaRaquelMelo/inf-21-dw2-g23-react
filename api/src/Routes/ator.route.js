const express = require("express");
const router = express.Router();

const atorController = require("../Controllers/ator.controller");
const basicAuth = require("../middleware/basicAuth");

router.get("/", basicAuth, atorController.getAtores);
router.get("/:id", basicAuth, atorController.getAtorById);
router.post("/", basicAuth, atorController.createAtor);
router.delete("/:id", basicAuth, atorController.deleteAtor);
router.put("/:id", basicAuth, atorController.updateAtor);

module.exports = router;
