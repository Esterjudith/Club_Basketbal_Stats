const express = require('express');
const playersController = require("../controllers/players")

const router = express.Router();


router.post('/updatePlayer/:id', playersController.updatePlayer)

router.get('/:id', playersController.getEdit)

module.exports = router;