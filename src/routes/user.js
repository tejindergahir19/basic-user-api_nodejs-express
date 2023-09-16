const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController")


router.get("/", UserController.getAllUsers);

router.get("/details/:user_id", UserController.getUserDetails);

router.put("/update", UserController.updateUserDetails);

router.get("/image/:user_id",UserController.getUserImage);

router.post("/insert",UserController.addUser);

// DELETE Request to delete data
router.delete("/delete/:user_id", UserController.deleteUser);

module.exports = router;
