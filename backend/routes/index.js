const router = require("express").Router();
const AdminFoodAndBeverages = require("./admin/foodAndBeverages");

router.use("/admin/foodAndBeverages", AdminFoodAndBeverages);

module.exports = router;
