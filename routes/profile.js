const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profileController = require("../controllers/profile");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

router.post("/profile", profileController.createPlayer);

// router.put("/numRebounds/:id", profileController.numRebounds);
// router.put("/numPoints/:id", profileController.numPoints);
// router.put("/numSteals/:id", profileController.numSteals);
// router.put("/numAssists/:id", postsController.numAssists);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
