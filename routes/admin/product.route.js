
const express = require("express");
const router = express.Router();
const controller = require("../../controllers//admin/product.controller.js");

router.get("/", controller.index);

router.patch("/delete/:id", controller.delete);

router.get("/create", controller.create);

module.exports = router; 