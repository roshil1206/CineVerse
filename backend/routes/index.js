const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");

router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/foodAndBeverages", FoodAndBeverages);

module.exports = router;
