const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");
const FoodAndBeverages = require("./user/foodAndBevereges");
const Payments = require("./user/payments");

router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);
router.use("/foodAndBeverages", FoodAndBeverages);

router.use("/payments", Payments);

router;
module.exports = router;
