const router = require("express").Router();
const FoodAndBeveragesModel = require("../../models/FoodAndBevereges");
const response = require("../../../utils/response");

router.get("/getAll", async (req, res) => {
  const data = await FoodAndBeveragesModel.find();
  response(res, 200, true, data);
});

module.exports = router;
