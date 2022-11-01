const express = require('express');
const playersController = require("../controllers/players")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const router = express.Router();
router.get("/", ensureAuth, playersController.getPlayer)

router.post('/addPlayer', playersController.addPlayer)

router.put("/addPoint/:id", playersController.addPoint);

router.put("/addRebound/:id", playersController.addRebound);

router.put("/addSteal/:id", playersController.addSteal);

router.put("/addAssist/:id", playersController.addAssist);

router.put("/addBlock/:id", playersController.addBlock);

router.put("/deletePoint/:id", playersController.deletePoint);

router.put("/deleteRebound/:id", playersController.deleteRebound);

router.put("/deleteSteal/:id", playersController.deleteSteal);

router.put("/deleteAssist/:id", playersController.deleteAssist);

router.put("/deleteBlock/:id", playersController.deleteBlock);

router.delete("/deletePlayer/:id", playersController.deletePlayer);

router.get('/updatePlayer/:id', playersController.updatePlayer)


module.exports = router;
