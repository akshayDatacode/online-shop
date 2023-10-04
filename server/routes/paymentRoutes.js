const express = require("express");
const checkToken = require("../middlewares/checkToken");
const paymentControllers = require("../controllers/paymentControllers");

const router = express.Router();

router.use(checkToken);
router.post("/cart_order", paymentControllers.createPayments);
// router.get("/cart_order", paymentControllers.fetchPayments);

module.exports = router;
