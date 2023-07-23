const express = require("express");
const userController = require("../../controllers/userController");
const { authenticateUser } = require("../../../middleware/authmiddleware");
const multer = require("../../../utils/multer");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/:id/updateuserinfo", [multer.single("imageUrl"), authenticateUser] ,userController.updateUserInfo);
router.post("/:id/getuserinfo",[multer.single("imageUrl"), authenticateUser], userController.getUserInfo);

module.exports = router;
