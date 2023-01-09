const express = require("express");
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/controller");
const router = express.Router();

router.route("/fetch").get(getUser);
router.route("/post").post(createUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/update/:id").put(updateUser);
module.exports = router;
