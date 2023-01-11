const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

exports.createPayments = async (req, res) => {
  const orderList = req.body.cartList
  try {
    if (!orderList && orderList.length == 0) {
      console.log("no orderList found");
      return res.status(400).json({
        status: "error",
        message: "orderList not found..!",
      });
    }

    const totalAmount = orderList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );

    var options = {
      amount: totalAmount * 100, // amount in the smallest currency unit
      currency: process.env.CURRENCY,
      receipt: "order_rcptid_1",
    };

    console.log("options", options  )

    instance.orders.create(options, function (err, order) {
      if (err) {
        return res.status(err.statusCode).json({
          status: "error",
          message: "Payment Denied!!!",
          error: err
        });
      }
      res.status(200).json({
        status: "success",
        message: "Payment create succefully..!",
        order,
      });
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};