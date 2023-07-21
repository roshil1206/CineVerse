const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");
const Payments = require("./user/payments");
const movieRoutes = require("./user/movie");
const adminMovieRoutes = require("./admin/movie");
const userManager = require("./user/userManager");
const screenRoutes = require("./user/screen");
const adminScreenRoutes = require("./admin/screen");

// Admin routes
router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/admin/movie", adminMovieRoutes);
router.use("/admin/screen", adminScreenRoutes);

// User routes
router.use("/foodAndBeverages", FoodAndBeverages);
router.use("/movie", movieRoutes);
router.use("/payments", Payments);
router.use("/user", userManager);
router.use("/screen", screenRoutes);

module.exports = router;
