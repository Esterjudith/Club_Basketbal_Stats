const express = require("express");
const router = express.Router();
const statController = require("../controllers/stat")

router.put("/addPoint", statController.addPoint);

router.put("/addRebound", statController.addRebound);

router.put("/addAssist", statController.addAssist);

router.put("/addSteal", statController.addSteal);

module.exports = router;


