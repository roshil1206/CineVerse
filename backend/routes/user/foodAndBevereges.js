const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  const data = await FoodAndBeveragesModel.find();
  response(res, 200, true, data);
});

module.exports = router;
