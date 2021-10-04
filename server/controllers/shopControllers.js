const Product = require("../models/productModel");

const addProduct = async (req, res, next) => {
  const { id, title, img, price, description } = req.body;

  const createdProduct = new Product({
    id,
    title,
    img,
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

const addProductToCart = async (req, res) => {
  const {
    body: { title, description, img, price },
    params: { id },
  } = req;
  const product = {
    title,
    description,
    img,
    price,
  };
  try {
    const updatedCart = await CodeProblemModel.findOneAndUpdate(
      { id: id },
      { $push: { cart: product } },
      { new: true }
    );

    return res.send({
      success: true,
      problem: updatedCart,
    });
  } catch (error) {
    console.error(error);
    return res.send({ success: false });
  }
};

exports.addProduct = addProduct;
exports.getProduct = getProduct;
exports.fetchProducts = fetchProducts;
exports.addProductToCart = addProductToCart;
