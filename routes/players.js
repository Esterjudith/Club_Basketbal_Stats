const express = require('express')
const playersController = require("../controllers/players")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const router = express.Router();
router.get("/", ensureAuth, playersController.getPlayer)

router.post('/addPlayer', playersController.addPlayer)

router.put("/addPoint", playersController.addPoint);

router.put("/addRebound", playersController.addRebound);

router.put("/addAssist", playersController.addAssist);

router.put("/addSteal", playersController.addSteal);

module.exports = router;