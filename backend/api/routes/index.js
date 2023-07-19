const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");
const movieRoutes = require("./user/movie");
const adminMovieRoutes = require("./admin/movie");

// Admin routes
router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/admin/movie", adminMovieRoutes);

// User routes
router.use("/foodAndBeverages", FoodAndBeverages);
router.use("/movie", movieRoutes);

module.exports = router;
