const express = require("express");
const paymentControllers = require("../controllers/paymentControllers");

const router = express.Router();

router.post("/cart_order", paymentControllers.createPayments);
// router.get("/cart_order", paymentControllers.fetchPayments);

module.exports = router;
