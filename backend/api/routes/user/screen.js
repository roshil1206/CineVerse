const express = require("express");
const screenController = require("../../controllers/screenController");

const router = express.Router();

// Route for fetching all available seats
router.get("/:id", screenController.getAvailableSeats);

// Route for booking seats
router.put("/:id", screenController.bookSeats);

// Route for deselecting/unbook seats
router.delete("/:id", screenController.deselectSeats);

module.exports = router;
