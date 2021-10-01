const express = require("express");
const shopController = require("../controllers/shopControllers");

const router = express.Router();

router.post("/add_product", shopController.addProduct);
router.get("/get_product/:id", shopController.getProduct);
router.get("/fetch_products", shopController.fetchProducts);

module.exports = router;
