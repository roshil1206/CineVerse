const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");
const Payments = require("./user/payments");
const movieRoutes = require("./user/movie");
const adminMovieRoutes = require("./admin/movie");
const userManager = require("./user/userManager");
const contact = require("./user/contact");
const landing = require("./user/landing");
const theatre = require("./user/theatre");

// Admin routes
router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/admin/movie", adminMovieRoutes);

// User routes
router.use("/foodAndBeverages", FoodAndBeverages);
router.use("/movie", movieRoutes);
router.use("/payments", Payments);
router.use("/user", userManager);
router.use("/contact", contact);
router.use("/landing", landing);
router.use("/theatre", theatre);

module.exports = router;
