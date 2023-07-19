const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");
const Payments = require("./user/payments");
const movieRoutes = require("./user/movie");
const adminMovieRoutes = require("./admin/movie");

// Admin routes
router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/admin/movie", adminMovieRoutes);

// User routes
router.use("/foodAndBeverages", FoodAndBeverages);
router.use("/movie", movieRoutes);

router.use("/payments", Payments);

router;
module.exports = router;
