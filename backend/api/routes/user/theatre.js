const express = require("express");
const theatreController = require("../../controllers/theatreController");

const router = express.Router();

router.get("/:id", theatreController.getTheatre);
router.post("/send", theatreController.saveDataToMongoDB);

module.exports = router;
