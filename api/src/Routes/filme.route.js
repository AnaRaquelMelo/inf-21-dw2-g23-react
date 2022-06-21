const express = require("express");
const router = express.Router();

const filmeController = require("../Controllers/filme.controller");
const basicAuth = require("../middleware/basicAuth");

router.get("/", basicAuth, filmeController.getFilmes);
router.get("/:id", basicAuth, filmeController.getFilmeById);
router.get("/:id/receitas", basicAuth, filmeController.getFilmeReceitas);
router.get("/:id/atores", basicAuth, filmeController.getFilmeAtores);
router.post("/", basicAuth, filmeController.createFilme);
router.delete("/:id", basicAuth, filmeController.deleteFilme);
router.put("/:id", basicAuth, filmeController.updateFilme);

module.exports = router;
