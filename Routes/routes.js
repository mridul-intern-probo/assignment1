const router = require("router");
const express = require("express");

const userController = require("../Controller/controller");

router
  .Route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

module.exports = router;
