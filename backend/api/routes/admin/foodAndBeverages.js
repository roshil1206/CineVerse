const router = require("express").Router();
const multer = require("../../../utils/multer");
const {
  getFoodItems,
  getFoodItem,
  addFoodItem,
  deleteItem,
  changeItemStatus,
  updateFoodItem,
} = require("../../controllers/foodAndBeveregesController");

router.get("/getItems", getFoodItems);
router.get("/get/:id", getFoodItem);
router.post("/addItem", multer.single("file"), addFoodItem);
router.put("/updateItem", multer.single("file"), updateFoodItem);
router.put("/chageItemStatus", changeItemStatus);
router.delete("/deleteItem", deleteItem);

module.exports = router;
