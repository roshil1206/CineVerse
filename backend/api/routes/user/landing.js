const express = require("express");
const movieController = require("../../controllers/landingController");

const router = express.Router();

// Route for fetching current movies and rotating banner movies
router.get("/current", movieController.getCurrentMovies);

// Route for fetching upcoming movies
router.get("/upcoming", movieController.getUpcomingMovies);

module.exports = router;
