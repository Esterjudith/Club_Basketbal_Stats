const express = require('express')
const playersController = require("../controllers/players")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const router = express.Router();
router.get("/", ensureAuth, playersController.getPlayer)

router.post('/createPlayer', playersController.addPlayer)

module.exports = router;