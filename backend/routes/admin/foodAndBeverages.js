const router = require("express").Router();
const FoodAndBeveragesModel = require("../../models/FoodAndBevereges");
const multer = require("../../utils/multer");
const response = require("../../utils/response");
const uploadImage = require("../../utils/cloudinary");

router.get("/getItems", async (req, res) => {
  const data = await FoodAndBeveragesModel.find();
  response(res, 200, true, data);
});
router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return response(res, 400, false, { message: "id is required" });
  }
  const data = await FoodAndBeveragesModel.findById(id);
  response(res, 200, true, data);
});

router.post("/addItem", multer.single("file"), async (req, res) => {
  const { file } = req;
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category || !file) {
    return response(res, 400, false, {
      message: "file, name, description, price and category are required.",
    });
  }
  try {
    const b64 = Buffer.from(file.buffer).toString("base64");
    const dataURI = "data:" + file.mimetype + ";base64," + b64;
    const imageData = await uploadImage(dataURI);

    const dataItem = new FoodAndBeveragesModel({
      name,
      description,
      price,
      category,
      imageUrl: imageData.url,
    });

    await dataItem.save();

    response(res, 200, true, {
      message: "Item uploaded successfully",
      itemData: dataItem,
    });
  } catch (error) {
    response(res, 500, false, { message: "Something went wrong" });
  }
});

router.put("/updateItem", multer.single("file"), async (req, res) => {
  const { file } = req;
  const updateFields = req.body;
  if (!updateFields.id) {
    return response(res, 400, false, { message: "Id is required." });
  }

  try {
    const data = await FoodAndBeveragesModel.findById(updateFields.id);

    if (file) {
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = "data:" + file.mimetype + ";base64," + b64;
      const imageData = await uploadImage(dataURI);
      data.imageUrl = imageData.url;
    }

    Object.keys(updateFields).forEach((field) => {
      data[field] = updateFields[field];
    });
    await data.save();
    return response(res, 200, true, {
      message: "Item updated successfully",
      itemData: data,
    });
  } catch (error) {
    response(res, 500, false, { message: "Something went wrong" });
  }
});

router.put("/chageItemStatus", async (req, res) => {
  const { id, status } = req.body;
  if (!id || !status) {
    return response(res, 400, false, {
      message: "id and status are required.",
    });
  }
  try {
    const updatedData = await FoodAndBeveragesModel.findByIdAndUpdate(id, {
      $set: {
        isActive: status,
      },
    });
    console.log(updatedData);

    return response(res, 200, true, {
      message: "Item updated successfully",
      itemData: updatedData,
    });
  } catch (error) {
    response(res, 500, false, { message: "Something went wrong" });
  }
});

router.delete("/deleteItem", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return response(res, 400, false, {
      message: "id is required.",
    });
  }
  try {
    const deleted = await FoodAndBeveragesModel.findByIdAndDelete(id);
    if (!deleted) {
      return response(res, 400, false, { message: "Invalid Id." });
    }

    return response(res, 200, true, { message: "Item deleted successfully." });
  } catch (error) {
    response(res, 400, false, { message: "Invalid Id." });
  }
});

module.exports = router;
