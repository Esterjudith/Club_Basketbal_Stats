const express = require('express')
const playersController = require("../controllers/players")

const router = express.Router();

router.get('/createPlayer', playersController.createPlayer)

module.exports = router;