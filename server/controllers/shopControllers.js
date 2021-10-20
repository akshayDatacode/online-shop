const Product = require("../models/productModel");
const Order = require("../models/ordersModel");

const addProduct = async (req, res, next) => {
  const { id, title, image, price, description } = req.body;

  const createdProduct = new Product({
    id,
    title,
    image,
    price,
    description,
  });

  try {
    const product = await createdProduct.save();
    res.send({ product: product, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  return res.status(201).json({
    id,
    title,
  });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.find({ id: id });
    return res.send({ product: product, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.send({ products: products, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const addOrder = async (req, res, next) => {
  const { id, email, cartList, total } = req.body;
  const createdOrder = new Order({
    id,
    email,
    order: cartList,
    total,
  });

  try {
    const order = await createdOrder.save();
    res.send({ order: order, success: true });
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }

  return res.status(201).json({
    id,
    email,
  });
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.send({ orders: orders, success: true });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

const addProductToCart = async (req, res) => {
  const {
    params: { userName },
    body: { isApproved },
  } = req;

  try {
    
    const updatedProblem = await CodeProblemModel.findOneAndUpdate(
      { id: id },
      {
        $set: { ["submissions.$[outer].isApproved"]: isApproved },
      },
      {
        arrayFilters: [{ "outer.userName": userName }],
        multi: true,
      }
    );
    const problem = await CodeProblemModel.findOne({ id: id });
    const user = await DaysCodeUserModel.findOne({ userName: userName });
    if (updatedProblem && user && user.isApproved) {
      Emailer.SolutionApprovedEmail(
        user,
        problem.day,
        isApproved,
        (err, success, res) => {
          if (err) {
            console.log("==========err============");
            console.log(err);
          } else {
            console.log(success);
          }
        }
      );
    }
    return res.send({
      success: true,
      problem: updatedProblem,
    });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addProduct = addProduct;
exports.getProduct = getProduct;
exports.fetchProducts = fetchProducts;
exports.addOrder = addOrder;
exports.getOrders = getOrders;
