const express = require("express");
const movieController = require("../../controllers/theatreController");

const router = express.Router();

// Route for fetching all theatre
router.get("/", movieController.getAllTheatre);

// Route for adding a theatre
router.post("/", movieController.addTheatre);

// Route for updating a theatre
router.put("/:id", movieController.updateTheatre);

// Route for deleting a theatre
router.delete("/:id", movieController.deleteTheatre);

module.exports = router;
