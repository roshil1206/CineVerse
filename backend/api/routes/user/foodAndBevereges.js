const router = require("express").Router();
const {
  getFoodItems,
} = require("../../controllers/foodAndBeveregesController");

router.get("/getAll", getFoodItems);

module.exports = router;
